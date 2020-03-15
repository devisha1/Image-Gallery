import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {
  imageUrl: any;

  constructor(private route: ActivatedRoute,
    private imageService: ImageService) { }

  ngOnInit() {
    const params = this.route.snapshot.url[1].path;
    this.imageService.getById(params).subscribe(res => {
      this.imageUrl = res['res'];
    });
    if (Object.keys(this.route.queryParams['_value'])[0]) {
      this.imageService.geByGrayScale(params).subscribe(grayscaleImage => {
        this.imageUrl = grayscaleImage['result'];
      });
    }
  }

}
