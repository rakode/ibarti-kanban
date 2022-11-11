import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListSchema } from '../models/listschema';
import { API } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class estatuservice extends API<ListSchema> {
  protected URL = `${this.URL_API}/status/?usuario=`;
  constructor(
    protected http: HttpClient,
  ) {
    super(http);
  }
}
