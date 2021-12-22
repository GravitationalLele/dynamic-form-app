import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DataService } from '../service/data-form.service';

@Component({
  selector: 'app-db-manager',
  templateUrl: './db-manager.component.html',
  styleUrls: ['./db-manager.component.css']
})
export class DbManagerComponent implements OnInit {
  provaForm = new FormGroup({});
  provaFields: FormlyFieldConfig[];
  provaModel;
  dataSource;
  displayedColumns;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProvaFields().subscribe(data =>{
      this.provaFields=[data];
      console.log(this.provaFields);
    })
    this.refreshData()

  }

  onSubmit(){
    this.dataService.postProvaData(this.provaModel.data).subscribe(
      data => {console.log(this.provaModel)
      this.refreshData()}
    )
  }

  refreshData(){
    this.dataService.getProvaData().subscribe(data =>{
      this.dataSource = JSON.parse(JSON.stringify(data));
      this.provaModel={"data":data[data.length-1]}
      this.displayedColumns = Object.keys(this.dataSource[0])
      console.log(this.provaModel)
      console.log(data)
    })
  }

}
