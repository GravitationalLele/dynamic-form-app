import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray } from '@angular/forms';
import { DataFormService } from '../service/data-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor(private dataFormService: DataFormService, private fb: FormBuilder) { }

  name = 'Angular 6';
  jsonFormOptions = {
    loadExternalAssets: false,
  };
  schema = {
    "type": "object",
    "properties": {
    },
    "title": "Coordinates"
  };

  layout = [ "*" ];
  keys;
  submittedFormData;
  provaType=[];
  readonly=[];
  load=0;
  category;
  mongoKey;
  mongoLoad;
  data={
    "a":1,
    "b":{
      "c":2,
      "d":{
        "e":3,
        "f":4
      }
    },
    "g":"aaa"
  }
  myFormGroup = this.fb.group({
    provaArrayForm: this.fb.array([]),
    subArrayForm: this.fb.array([])
  });
  myFormNames = ["a","b"];
  prova = {
  }
  ngOnInit(): void {
    // this.dataFormService.getData().subscribe(
    //   res => {
    //     this.schema=res;
    //     console.log(res);
    //   }
    // )

   //this.retrieveData();
   this.dataFormService.getMongoData().subscribe(
     res => {
       
      this.data = res[res.length-1];
      this.mongoKey = Object.keys(this.data);
       this.mongoLoad=1;
       console.log(this.data)
       for(let key in this.data){
         if(typeof(this.data[key])!=='object'){
          this.provaArrayForm.push(this.fb.control(this.data[key]));
         }else{
          for(let k in this.data[key]){
            if(typeof(this.data[key][k])!=='object'){
              this.provaArrayForm.push(this.fb.control(this.data[key][k]));
            }else{
              for(let j in this.data[key][k]){
                this.subArrayForm.push(this.fb.control(this.data[key][k][j]));
              }
            }
          }
         }
      }
       
     }
   )
    // for(let i=0;i<2;i++){
    //   this.provaArrayForm.push(this.fb.control(''));
    // }
    
    
    
   
  }

  // onSubmit(data: any) {
  //   this.submittedFormData = data;
  //   console.log(data);
  // }

  //  showFormSchemaFn($event) {
  //   console.log($event);
  // }

  // showFormLayoutFn($event) {
  //   console.log($event);
  // }

  get provaArrayForm() {
    return this.myFormGroup.get('provaArrayForm') as FormArray;
  }

  get subArrayForm() {
    return this.myFormGroup.get('subArrayForm') as FormArray;
  }

  addForm() {
    this.provaArrayForm.push(this.fb.control(''));
  }

  sendForm(){
    console.log(this.provaArrayForm);
  }

  provaForm(){
    console.log(this.prova);
  }

  provaMongoForm(){
    console.log(this.data);
  }

  retrieveData(){
    this.dataFormService.getCustomData().subscribe(
      res => {
        this.prova=res[res.length-1];

        this.keys = Object.keys(this.prova);
        const index = this.keys.indexOf("category", 0);
        if (index > -1) {
          this.category = this.prova["category"];
          this.keys.splice(index, 1);
       }
       
        for(let i = 0; i<this.keys.length; i++){
          this.provaType.push(typeof(this.prova[this.keys[i]]))
          if(this.keys[i]=="name"){
            this.readonly.push(true);
          }else{
            this.readonly.push(false);
          }
        }
        this.load=1;
      }
    )
  }
  unsorted(){}

  retrieveMongoData(){
    this.dataFormService.getMongoData().subscribe(
      res => {
        let data = res[res.length-1];

       this.mongoKey = Object.keys(this.data);
        this.mongoLoad=1;
        console.log(this.data)
      }
    )
  }

}
