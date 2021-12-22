import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data-form.service';

@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.css']
})
export class DataVisualizationComponent implements OnInit {

  dataSeries;
  title1=["Semi-major axis [km]", "a[km]"]
  title2=["Inclination", "i[°]"]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getChartData().subscribe(data =>{
      this.dataSeries=data;
    })
  }

}
