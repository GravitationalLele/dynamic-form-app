import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient
  ) {}


  getFormFieldsArray(field_name){
    return this.http.get<FormlyFieldConfig[]>("http://localhost:8080/"+field_name)
  }

  getFormFields(field_name){
    return this.http.get<FormlyFieldConfig>("http://localhost:8080/"+field_name)
  }

  getData(data_name){
    return this.http.get("http://localhost:8080/"+data_name)
  }

  getChartData(){
    return this.http.get<String[]>("http://localhost:8080/chart_data")
  }

  getProvaFields(){
    return this.http.get<FormlyFieldConfig>("http://localhost:8080/getProvaStructureFromDB")
  }

  getProvaData(){
    return this.http.get<Array<any>>("http://localhost:8080/getProvaDataFromDB")
  }

  postProvaData(body){
    return this.http.post<Array<any>>("http://localhost:8080/postProvaDataFromDB", body)
  }

}
