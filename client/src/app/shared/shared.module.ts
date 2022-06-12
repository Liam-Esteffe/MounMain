import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TaskComponent } from './task/task.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavigationBarComponent,
    TaskComponent,
    DialogComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SidebarComponent,
  NavigationBarComponent,
  LogoComponent,
TaskComponent]
})
export class SharedModule { }
