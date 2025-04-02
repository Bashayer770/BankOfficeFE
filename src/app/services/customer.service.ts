import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import API from './index';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(API.CUSTOMER.GETALLCUSTOMERS);
  }

  searchByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(API.CUSTOMER.SEARCH_NAME(name));
  }

  searchByNumber(number: number): Observable<any> {
    return this.http.get<any>(API.CUSTOMER.SEARCH_NUMBER(number));
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(API.CUSTOMER.GET_BY_ID(id));
  }

  delete(id: number): Observable<any> {
    return this.http.delete(API.CUSTOMER.DELETECUSTOMER(id));
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(API.CUSTOMER.UPDATECUSTOMER(id), data);
  }

  add(data: any): Observable<any> {
    return this.http.post(API.CUSTOMER.CREATECUSTOMER, data);
  }
}
