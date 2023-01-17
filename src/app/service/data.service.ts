import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers2 = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic SVZTb2x1dGlvbjoxUzBsdXQxMG4yQDIy'
  });
  requestOptions2 = { headers: this.headers2 };

  constructor(private http: HttpClient) { }

  getSettings() {
    return this.http.get(`http://extend.jdmexpedite.com/api/settings`, this.requestOptions2);
  };

  setSettings(obj: any) {
    this.http.post(`http://extend.jdmexpedite.com/api/settings`, obj, this.requestOptions2).subscribe((response: any) => {
      console.log(response);
    });
  }

}
