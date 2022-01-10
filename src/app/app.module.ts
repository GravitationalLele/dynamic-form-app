import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { Bootstrap4FrameworkModule } from '@ajsf/bootstrap4';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NewFormComponent } from './new-form/new-form.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ArrayTypeComponent } from './new-form/control_types/array.type';
import { ObjectTypeComponent } from './new-form/control_types/object.type';
import { PanelWrapperComponent } from './new-form/control_types/panel-wrapper.component';
import { MyChartComponent } from './chart/my-chart.component';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component';
import { DbManagerComponent } from './db-manager/db-manager.component';
import { MenuComponent } from './menu/menu.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyTableComponent } from './my-table/my-table.component';
import { DataInputFormComponent } from './data-input-form/data-input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFormComponent,
    MyChartComponent,
    PanelWrapperComponent,
    DataVisualizationComponent,
    DbManagerComponent,
    MenuComponent,
    MyTableComponent,
    DataInputFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    Bootstrap4FrameworkModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MatTabsModule,
    MatTableModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'decimal',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
              step: 0.01
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
              step: 1
            },
          },
        },
        {
          name: 'string',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'text',
            },
          },
        },
        { name: 'array', component: ArrayTypeComponent },
        { name: 'object', component: ObjectTypeComponent }
      ],
      wrappers: [
        { name: 'panel', component: PanelWrapperComponent },
      ]
      }
    ),
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
