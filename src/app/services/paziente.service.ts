import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Paziente} from "../models/paziente";

@Injectable({
  providedIn: 'root'
})
export class PazienteService {

  constructor(private http: HttpClient) { }

  getPazienti(): Observable<Paziente[]> {
    return this.http.get<Paziente[]>('http://127.0.0.1:5000/api/listapazienti');
  }

  getPazienteByID(id: string | undefined): Observable<any>{
    return this.http.get<any>("http://127.0.0.1:5000/api/pazienti/"+id+"");
  }



}
