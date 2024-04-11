import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecargaService {

  
  private url = 'http://137.184.230.141:5000/api/v1';

  constructor(private http: HttpClient) { }

  getOperadores(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      })
    };
  
    return this.http.get<any>(this.url + `/operadores`, httpOptions);
  }

  postRecarga(operador_id: number, numero: number, valor: number): Observable<any> {
    const body = { operador_id, numero, valor };
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    })
  };

  return this.http.post<any>(this.url + '/enviar_recarga', body, httpOptions);
    
  }

}
