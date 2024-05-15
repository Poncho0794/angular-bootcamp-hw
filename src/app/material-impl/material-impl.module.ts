import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialImplRoutingModule } from './material-impl-routing.module';
import { TestMaterialComponent } from './components/test-material/test-material.component';


import {MatButtonModule} from '@angular/material/button';
import { DialogHwComponent } from './components/dialog-hw/dialog-hw.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
@NgModule({
  declarations: [TestMaterialComponent, DialogHwComponent],
  imports: [
    CommonModule,
    MaterialImplRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ]
})
export class MaterialImplModule { }
