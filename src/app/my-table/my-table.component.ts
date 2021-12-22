import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../service/data-form.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  @Input() dataSource;
  @Input() displayedColumns;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.displayedColumns)
  }


}
