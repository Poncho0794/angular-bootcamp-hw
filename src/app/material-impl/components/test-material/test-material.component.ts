import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogHwComponent } from '../dialog-hw/dialog-hw.component';
 
export interface DialogData {
  name: string
}
@Component({
  selector: 'app-test-material',
  templateUrl: './test-material.component.html',
  styleUrl: './test-material.component.scss'

})
export class TestMaterialComponent {
  name: string = '';
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogReference = this.dialog.open(DialogHwComponent, {
      data: {name: this.name},
    })
    dialogReference.afterClosed().subscribe((name) => {
      this.name = name
    })
  }
}
