import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule} from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

const MaterialComponents = [
  MatDialogModule,
  MatIconModule,
  MatSelectModule,
  MatInputModule,
  MatDividerModule
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
