import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatSlideToggleModule } from '@angular/material/slide-toggle'

import { SettingsComponent } from './settings/settings.component';
import { PerformanceComponent } from './settings/performance/performance.component';
import { RecruitingComponent } from './recruiting/recruiting.component';
import { RpmComponent } from './recruiting/rpm/rpm.component';
import { OperatingAreaComponent } from './recruiting/operating-area/operating-area.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    PerformanceComponent,
    RecruitingComponent,
    RpmComponent,
    OperatingAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatListModule,
    CdkAccordionModule,
    MatSidenavModule,
    DragDropModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    NgApexchartsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
