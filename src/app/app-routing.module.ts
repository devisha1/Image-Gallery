import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewImageComponent } from './view-image/view-image.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FilterImagersComponent } from './filter-imagers/filter-imagers.component';
const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
  },
  {
    path: 'image/:id',
    component: ViewImageComponent
  },
  {
    path: 'image',
    component: ViewImageComponent
  },
  {
    path: 'images-by-resolution',
    component: FilterImagersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
