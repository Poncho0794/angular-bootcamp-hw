import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDialogData } from '../test-material/test-material.component';

@Component({
  selector: 'app-dialog-hw',
  templateUrl: './dialog-hw.component.html',
  styleUrl: './dialog-hw.component.scss',
})
export class DialogHwComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogHwComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) {}

  onCancelClick() {
    this.dialogRef.close();
  }
}
