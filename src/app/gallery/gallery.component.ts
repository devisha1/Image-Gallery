import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: any;
  list1: any;
  list2: any;
  list3: any;
  list4: any;
  list5: any;
  value;
  resolutions = [
    { value: '400by200', viewValue: '400 * 200' },
    { value: '300by300', viewValue: '300 *300' },
    { value: '300by200', viewValue: '300 *200' },
    { value: '250by250', viewValue: '250 *250' },
    { value: '100by100', viewValue: '100 * 100' },
  ];
  images3: any;
  constructor(private imageService: ImageService,
    private router: Router) {
  }
  page = 0;
  size = 4;
  images2;
  ngOnInit() {
    this.imageService.getAllImages().subscribe(res => {
      this.images2 = res;
      this.imageService.getfilter().subscribe(result => {
        this.list1 = result['300by300'];
        this.list2 = result['300by200'];
        this.list3 = result['100by100'];
        this.list4 = result['250by250'];
        this.list5 = result['400by200'];
      });
      this.getData({ pageIndex: this.page, pageSize: this.size });
    });
  }

  getData(obj) {
    let index = 0,
      // tslint:disable-next-line:prefer-const
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.images = this.images2.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  navigateToImage(i) {
    const substring = i.match('://(.*?)/(.*?)(\/|$)(\/|$)')[2];
    const id = substring.split('/');
    this.router.navigate(['/image', id[1]]);
  }

  selectFilter(value) {
    this.images2 = [];
    if (value === '400by200') {
      this.images2 = this.list5;
      this.getData({ pageIndex: this.page, pageSize: this.size });
    }
    if (value === '300by300') {
      this.images2 = this.list1;
      this.getData({ pageIndex: this.page, pageSize: this.size });
    }

    if (value === '300by200') {
      this.images2 = this.list2;
      this.getData({ pageIndex: this.page, pageSize: this.size });
    }

    if (value === '250by250') {
      this.images2 = this.list4;
      this.getData({ pageIndex: this.page, pageSize: this.size });
    }

    if (value === '100by100') {
      this.images2 = this.list3;
      this.getData({ pageIndex: this.page, pageSize: this.size });
    }
  }
}