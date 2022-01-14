import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { DataService } from '../service/data-form.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
  form = new FormGroup({});
  selectFields: FormlyFieldConfig[];
  formConf: FormlyFieldConfig[]=[];
  fields1: FormlyFieldConfig[];
  fields2: FormlyFieldConfig[];
  fields3: FormlyFieldConfig[];
  fields=[];
  tabs = [];
  sat_model;
  gps_model;
  operationType = "Navigation Kalmann";
  constructor( private http: HttpClient, private dataService: DataService) { 
  }

  ngOnInit(): void {
    // this.formConf.push(this.createSingleForm('prova', 'input', 'col-4', true, 'number', "Prova", "Questo è un placeholder"));
    // console.log(this.formConf)

    console.log(this.fields)

    this.dataService.getData("sat_data").subscribe(data => {
      this.sat_model=data;
      console.log(data)
      //this.changeForm(this.model)
    })

    this.dataService.getFormFields("selectForm").subscribe(data =>{
      this.selectFields=[data];
    })
    this.initializeForms();


//    this.dataService.getFormFields("nuovaProva").subscribe(data =>{
    // this.dataService.getFormFields("estimatedParameters").subscribe(data =>{
    //   console.log(data)
    //   this.noiseFields=[data];
    // })

    // this.dataService.getData("gps_data").subscribe(data => {
    //   this.gps_model=data;
    //   console.log(this.gps_model)
    // })
    
  }


  onSubmit() {
    console.log(this.form.value);
  }

  getFormData(formType){
    if(formType=="Navigation Kalmann"){
      this.dataService.getFormFieldsArray("inputForm").subscribe(data =>{
        this.fields1=[data[0]];
        this.fields2=null;
        console.log(this.fields1)
      })
    }else if(formType=="Navigation Batch"){
      this.dataService.getFormFieldsArray("inputForm").subscribe(data =>{
        this.fields1=null;
        this.fields2=[data[1]];
      })
    }
    
  }

  changeForm(value){
    this.getFormData(value.operationType)
    console.log(value.operationType)
  }

  change(value){
    this.operationType = value.operationType;
    this.initializeForms()
    console.log(value)
  }

  initializeForms(){
    this.tabs=[];
    this.fields=[];

    this.dataService.getFormFields("satelliteDataForm").subscribe(data =>{
      this.tabs[0] = data.templateOptions.label;
      this.fields[this.tabs[0]]=[data];
    })
    this.dataService.getFormFields("gpsReceiverForm").subscribe(data =>{
      this.tabs[1] = data.templateOptions.label;
      this.fields[this.tabs[1]]=[data];
    })
    this.dataService.getFormFields("mesurementProperties").subscribe(data =>{
      this.tabs[2] = data.templateOptions.label;
      this.fields[this.tabs[2]]=[data];
    })
    if(this.operationType=="Navigation Kalmann"){

      
    }else if(this.operationType=="Navigation Batch"){
      this.dataService.getFormFields("thrustProperties").subscribe(data =>{
        this.tabs[3] = data.templateOptions.label;
        this.fields[this.tabs[3]]=[data];
      })
    }

  }

}
