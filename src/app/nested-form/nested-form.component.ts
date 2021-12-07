import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  empForm:FormGroup;
  dataForm:FormGroup;
  dataName = [];
  secondDataName = [];
  dataType = [];
  showForm;
  firstLevel=[];
  dataProva={
    a: 4,
    b: "casa",
    c: {
      e: 2.1,
      f: 12,
      g: "nested"
    },
    d: 0.3
  }
 
  constructor(private fb:FormBuilder) {
   this.empForm=this.fb.group({
     employees: this.fb.array([])
   })

   this.dataForm=this.fb.group({
     firstLevelData: this.fb.array([])
   })


  }
 

  ngOnInit(): void {
    this.addFirstLevelData(this.dataProva);
    this.addSecondLevelData(2);
    this.showForm = 1;
    console.log(this.firstLevelData().controls)
    console.log(this.secondLevelData(0).controls[0])
  }


  employees(): FormArray {
    return this.empForm.get("employees") as FormArray
  }
  employeeSkills(empIndex:number) : FormArray {
    return this.employees().at(empIndex).get("skills") as FormArray
  }

  firstLevelData(): FormArray{
    return this.dataForm.get("firstLevelData") as FormArray
  }
  secondLevelData(index): FormArray{
    return this.firstLevelData().at(index).get("secondLevelData") as FormArray
  }


  addEmployee() {
    this.employees().push(this.fb.group({
      firstName: '',
      lastName: '',
      skills:this.fb.array([])
    }));
  }
  addEmployeeSkill(empIndex:number) {
    this.employeeSkills(empIndex).push(this.fb.group({
      skill: '',
      exp: '',
    }));
  }

  addFirstLevelData(dataProva){
    for(let key in dataProva){
      this.dataName.push(key);
      this.dataType.push(typeof dataProva[key]);
      if((typeof dataProva[key])!='object'){
        this.firstLevel.push(1);
        this.firstLevelData().push(this.fb.group({
          [key]: dataProva[key],
          secondLevelData: this.fb.array([])
        }))
      }else{
        this.firstLevel.push(0);
        this.secondDataName.push(key);
        this.firstLevelData().push(this.fb.group({
          secondLevelData: this.fb.array([])
        }))
      }
      
    }
    
  }
  
  addSecondLevelData(index){
    this.secondLevelData(index).push(this.fb.group({
      prova: 'nested'
    }))
  }
  
  onSubmitDataForm(){
    console.log(this.dataForm.value);
  }






  removeEmployee(empIndex:number) {
    this.employees().removeAt(empIndex);
  }
  removeEmployeeSkill(empIndex:number,skillIndex:number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.empForm.value);
  }

 
}
