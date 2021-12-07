import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { dataSeries } from "../../assets/data-series";

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  formConf: FormlyFieldConfig[]=[];
  satFields: FormlyFieldConfig[];
  gpsFields: FormlyFieldConfig[];
  noiseFields: FormlyFieldConfig[];
  model;
  dataSeries;
  title1=["Semi-major axis [km]", "a[km]"]
  title2=["Inclination", "i[°]"]
    
  constructor( private http: HttpClient,) { 
  }


  ngOnInit(): void {
    // this.formConf.push(this.createSingleForm('prova', 'input', 'col-4', true, 'number', "Prova", "Questo è un placeholder"));
    // console.log(this.formConf)
    this.dataSeries=dataSeries;

    this.http.get<FormlyFieldConfig>("http://localhost:8080/provaJson").subscribe(data =>{
      this.satFields=[data];
      console.log(this.satFields)
    })

    this.http.get<FormlyFieldConfig>("http://localhost:8080/provaGPSData").subscribe(data =>{
      this.gpsFields=[data];
      console.log(this.gpsFields)
    })

    this.http.get<FormlyFieldConfig>("http://localhost:8080/provaSelectForm").subscribe(data =>{
      this.fields=[data];
      console.log(data)
    })

    this.http.get<FormlyFieldConfig>("http://localhost:8080/mesurementProperties").subscribe(data =>{
      this.noiseFields=[data];
      console.log(data)
    })

    
    // this.http.get<FormlyFieldConfig[]>('assets/simple.json').subscribe(data => {
    //   this.fields=data;
    //   console.log(data)
    // })
    this.http.get('assets/model.json').subscribe(data => {
      this.model=data;
    })

    
  }


  onSubmit(model) {
    console.log(this.form.value);
  }



  // createSingleForm(key: string, type: string, className: string, required: boolean, template_type: string, label: string, placeholder: string): FormlyFieldConfig {
  //   let myForm: FormlyFieldConfig = {templateOptions:{}};
  //   myForm.key=key;
  //   myForm.type=type;
  //   myForm.className=className;
  //   myForm.templateOptions.required=required;
  //   myForm.templateOptions.type=template_type;
  //   myForm.templateOptions.label=label
  //   myForm.templateOptions.placeholder=placeholder

  //   return myForm
  // }
}
