import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tarjetas } from '../models/tarjetas';

@Injectable({
  providedIn: 'root',
})
export class TarjetasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = environment.ConexionWebApiProxy + 'tarjetas/';
  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }

  post(obj: Tarjetas) {
    return this.httpClient.post(this.resourceUrl, obj);
  }

  put(id: number, obj: Tarjetas) {
    return this.httpClient.put(this.resourceUrl + id, obj);
  }

}