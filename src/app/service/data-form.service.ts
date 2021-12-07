import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  constructor(
    private http:HttpClient
  ) {}

  getData(){
    return this.http.get<any>('http://localhost:8080/profile/coordinates', {
      headers: new HttpHeaders()
      .set('Accept', 'application/schema+json')
      
    })
  }

  getCustomData(){
    return this.http.get<any>('http://localhost:8080/prova')
  }

  getMongoData(){
    return this.http.get<any>('http://localhost:8080/mongo/get')
  }
}
