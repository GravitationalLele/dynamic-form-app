import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent implements OnInit {

  constructor(private httpClient: HttpClient, private fb: FormBuilder) { }
  names=[];
  items;
  generalKeys=[];
  list=[];
  myKeys=[];
  load;
  fullKeys;
  formGroup: FormGroup;
 
  ngOnInit(): void {
    this.formGroup=this.fb.group({})
    this.httpClient.get("assets/data.json").subscribe(data =>{
      this.items = data[0];
      this.names = Object.keys(data[0])
      this.list=this.createLevel(this.items)
      this.generalKeys=this.list;
      
      this.formGroup = this.createGroup(this.items);
      this.load=1;
      console.log(this.formGroup)
      this.fullKeys = this.createFullKey(this.items, 0, '0')
    })

  }

  submit(){
    console.log(this.formGroup.value)
  }

  createLevel(items){
    let keys=[];
    Object.keys(items).forEach(i => {
      if(typeof(items[i])!='object'){
        keys[i]=typeof(items[i]);
      }else{
        keys[i] = this.createLevel(items[i])
      }
    })
    return keys;
  }

  createFullKey(items, level, key){
    let fullKeys=[];
    Object.keys(items).forEach(i => {
      if(typeof(items[i])!='object'){
        fullKeys[i] = (level==0)? i : key+'.'+i
      }else{
        fullKeys[i] = (level==0)? this.createFullKey(items[i], 1, i): this.createFullKey(items[i], 1, key+'.'+i)
      }
    })
    return fullKeys;
  }

  createGroup(items){
    let formGroup = this.fb.group({});
    Object.keys(items).forEach(i => {
      if(typeof(items[i])!='object'){
        formGroup.addControl(
          i , new FormControl(items[i])
        )
      }else{
        formGroup.addControl(
          i , this.createGroup(items[i])
        )
      }
    })
    return formGroup;
  }

  checkType(value){
    if(typeof(value)!='object'){
      return true
    }
    return false
  }
}
