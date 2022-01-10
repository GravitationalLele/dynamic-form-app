import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DataService } from '../service/data-form.service';

@Component({
  selector: 'app-data-input-form',
  templateUrl: './data-input-form.component.html',
  styleUrls: ['./data-input-form.component.css']
})
export class DataInputFormComponent implements OnInit {

  form = new FormGroup({});
  selectFields: FormlyFieldConfig[];
  formConf: FormlyFieldConfig[]=[];
  fields1: FormlyFieldConfig[];
  fields2: FormlyFieldConfig[];
  fields3: FormlyFieldConfig[];
  fields: any =[];
  tabs: string[] = [];
  sat_model;
  gps_model;
  operationType: string = "Navigation Kalmann";

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {

    this.dataService.getData("sat_data").subscribe(data => {
      this.sat_model=data;
    })

    this.dataService.getFormFields("selectForm").subscribe(data =>{
      this.selectFields=[data];
    })
    this.initializeForms()
  }

  onSubmit() {
    console.log(this.form.value);
  }

  change(value){
    this.operationType = value.operationType;
    this.initializeForms()
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
