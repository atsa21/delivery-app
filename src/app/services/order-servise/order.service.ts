import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/order.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private mainUrl = environment.apiUrl + '/orders';

  constructor(private http: HttpClient) { }

  addOrder(order: Order): Observable<any> {
    return this.http.post<any>(this.mainUrl, order);
  }

}
