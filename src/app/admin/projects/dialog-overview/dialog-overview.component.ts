import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/*@Component({
  selector: 'app-dialog-overview',
  template: `
   
  `,
  styles: [
  ]
})*/

@Component({
  selector: 'app-dialog-overview',
template: `
<div mat-dialog-content>
  <p>What's your favorite animal?</p>
  <mat-form-field>
    <input matInput placeholder="projectName">
  </mat-form-field>
  <mat-form-field>
    <input matInput placeholder="Descrption">
  </mat-form-field>
  <mat-form-field>
    <input matInput  placeholder="projectName">
  </mat-form-field>
  <mat-form-field>
    <input matInput placeholder="Client Name">
  </mat-form-field>
  <mat-form-field>
    <input matInput placeholder="Client Email">
  </mat-form-field>
  <mat-form-field>
    <input matInput placeholder="Client Contact Person">
  </mat-form-field>
  <mat-form-field>
    <input matInput placeholder="Client Contact Name">
  </mat-form-field>
  <mat-form-field>
    <input matInput placeholder="Client Location">
  </mat-form-field>
</div>
<div mat-dialog-actions>
  <button mat-button>No Thanks</button>
  <button mat-button>Ok</button>
</div>
  `
})

export class DialogOverviewComponent {
  projectTitle: string;
  description: string;
  clientName: string;
  clientEmail: string;
  clientContactPerson: string;
  clientContactName: string;
  clientLocation: string;

  constructor(public dialog:MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '100px',
      data: { 
        projectTitle: this.projectTitle,
        description: this.description,
        clientName: this.clientName,
        clientEmail: this.clientEmail,
        clientContactPerson: this.clientContactPerson,
        clientContactName: this.clientContactName,
        clientLocation: this.clientLocation
       }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.clientName = result;
    });
  }

}



export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
   // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}