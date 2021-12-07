import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyChartComponent } from './chart/my-chart.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { NewFormComponent } from './new-form/new-form.component';

const routes: Routes = [
  {path: "", component: NewFormComponent},
  {path: "reactive", component: MyReactiveFormComponent},
  {path: "nested", component: NestedFormComponent},
  {path: "dynamic", component: DynamicFormComponent },
  {path: "chart", component: MyChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
