import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-imagers',
  templateUrl: './filter-imagers.component.html',
  styleUrls: ['./filter-imagers.component.css']
})
export class FilterImagersComponent implements OnInit {
  list1: any;
  list2: any;
  list3: any;
  list4: any;
  list5: any;
  images = [];
  images1 = [];
  page = 0;
  size = 4;
  page1 = 0;
  size1 = 3;
  list: any;
  list22: any;
  list44: any;
  list33: any;
  list55: any;
  constructor(private imageService: ImageService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {

    this.imageService.getfilter().subscribe(result => {
      this.list1 = result['300by300'];
      this.list2 = result['300by200'];
      this.list3 = result['100by100'];
      this.list4 = result['250by250'];
      this.list5 = result['400by200'];

      this.getData({ pageIndex: this.page, pageSize: this.size });
      this.getData2({ pageIndex: this.page, pageSize: this.size });
      this.getData3({ pageIndex: this.page, pageSize: this.size });
      this.getData4({ pageIndex: this.page, pageSize: this.size });
      this.getData5({ pageIndex: this.page1, pageSize: this.size1 });
    });
  }

  getData(obj) {
    let index = 0,
      // tslint:disable-next-line:prefer-const
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.list = this.list1.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  getData2(obj) {
    let index = 0,
      // tslint:disable-next-line:prefer-const
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.list22 = this.list2.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  getData3(obj) {
    let index = 0,
      // tslint:disable-next-line:prefer-const
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.list33 = this.list3.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  getData4(obj) {
    let index = 0,
      // tslint:disable-next-line:prefer-const
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.list44 = this.list4.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  getData5(obj) {
    let index = 0,
      // tslint:disable-next-line:prefer-const
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.list55 = this.list5.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  navigateToImage(i) {
    const substring = i.match('://(.*?)/(.*?)(\/|$)(\/|$)')[2];
    const id = substring.split('/');
    this.router.navigate(['/image', id[1]]);
  }
}
