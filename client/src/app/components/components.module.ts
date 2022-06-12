import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

import {MatTabsModule} from '@angular/material/tabs';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatTabsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent]
})
export class ComponentsModule { }
