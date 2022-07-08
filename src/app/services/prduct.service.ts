import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prduct } from '../interfaces/prduct';

@Injectable({
  providedIn: 'root'
})
export class PrductService {

apiUrl = "http://localhost:3000/products"

  constructor(private http: HttpClient) {}

  all(): Observable<Prduct[]> {
    return this.http.get<Prduct[]>(this.apiUrl)
  }

  create(data: any): Observable<Prduct[]> {
    return this.http.post<Prduct[]>(this.apiUrl, data)
  }

  get(id: number): Observable<Prduct> {
    return this.http.get<Prduct>(`${this.apiUrl}/${id}`)
  }

  update(id: number, data: any): Observable<Prduct> {
    return this.http.put<Prduct>(`${this.apiUrl}/${id}`, data)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

}
