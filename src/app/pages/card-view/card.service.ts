import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APP_CONFIG } from 'src/assets/config/app.config';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  url: string = APP_CONFIG.API_SERVER;
  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    const res = this.http.get(this.url + `/v1/flash-card/list`);
    return res;
  }

}
