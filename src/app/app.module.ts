import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { Bootstrap4FrameworkModule } from '@ajsf/bootstrap4';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { NewFormComponent } from './new-form/new-form.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';
import { ArrayTypeComponent } from './new-form/array.type';
import { ObjectTypeComponent } from './new-form/object.type';
import { PanelWrapperComponent } from './new-form/panel-wrapper.component';
import { MyChartComponent } from './chart/my-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    NestedFormComponent,
    NewFormComponent,
    MyChartComponent,
    MyReactiveFormComponent,
    PanelWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Bootstrap4FrameworkModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgApexchartsModule,
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
