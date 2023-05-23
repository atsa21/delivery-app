import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private mainUrl = environment.apiUrl + '/shops';

  constructor(private http: HttpClient) { }

  getShops(): Observable<{ message: string, data: any }> {
    return this.http.get<{ message: string, data: any }>(this.mainUrl);
  }

  getShopById(id: string): Observable<{ message: string, data: any }> {
    return this.http.get<{ message: string, data: any }>(`${this.mainUrl}/${id}`);
  }
}
