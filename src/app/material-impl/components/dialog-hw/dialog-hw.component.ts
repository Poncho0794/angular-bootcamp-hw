import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../test-material/test-material.component';

@Component({
  selector: 'app-dialog-hw',
  templateUrl: './dialog-hw.component.html',
  styleUrl: './dialog-hw.component.scss'
})
export class DialogHwComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogHwComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onCancelClick() {
    this.dialogRef.close()
  }
}
