import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {

  uri = '/business';
  versionuri = '/getversion';
  serverurl = 'http://localhost:4000/';
  constructor(private http: HttpClient) { }


  getAllImages() {
    return this
      .http
      .get(`${this.serverurl}image`);
  }

  getVersion() {
    return this
      .http
      .get(`${this.serverurl}getversion`);
  }

  getfilter() {
    return this
      .http
      .get(`${this.serverurl}image/filterbyResolutions`);
  }

  getById(id) {
    return this
      .http
      .get(`${this.serverurl}image/getById/${id}`);
  }


  geByGrayScale(id) {
    return this
      .http
      .get(`${this.serverurl}image/geByGrayScale/${id}`);
  }

}
