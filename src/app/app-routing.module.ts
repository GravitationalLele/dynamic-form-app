import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyChartComponent } from './chart/my-chart.component';
import { DataInputFormComponent } from './data-input-form/data-input-form.component';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component';
import { DbManagerComponent } from './db-manager/db-manager.component';
import { NewFormComponent } from './new-form/new-form.component';

const routes: Routes = [
  {path: "", component: DataInputFormComponent},
  {path: "chart", component: DataVisualizationComponent },
  {path: "db", component: DbManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
