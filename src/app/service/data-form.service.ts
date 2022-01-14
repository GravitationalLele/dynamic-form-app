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

  getProvaFields(entity_name: String){
    return this.http.get<FormlyFieldConfig>("http://localhost:8080/getProvaStructureFromDB/"+entity_name)
  }

  getProvaData(entity_name: String){
    return this.http.get<Array<any>>("http://localhost:8080/getProvaDataFromDB/"+entity_name)
  }

  postProvaData(body, entity_name){
    return this.http.post<Array<any>>("http://localhost:8080/postProvaDataFromDB/"+entity_name, body)
  }

  deleteEntry(entity_name: String, id:number){
    return this.http.delete(`http://localhost:8080/delete/${entity_name}/${id}`)
  }

}
