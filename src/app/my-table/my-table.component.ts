import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../service/data-form.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  @Input() dataSource;
  @Input() displayedColumns: string[];
  @Output() newItemEvent = new EventEmitter<number>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.dataSource)
  }

  prova(id:number){
    console.log(id)
  }

  deleteEntry(id:number){
    this.newItemEvent.emit(id);
  }


}
