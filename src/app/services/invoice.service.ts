import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Invoice} from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private httpClient = inject(HttpClient);
  getInvoices(): Observable<Invoice[]> {
    return this.httpClient.get<Invoice[]>('fakeData/invoices.json')
  }
}
