import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface ClientData {
  animal: string;
  name: string;
}

export class DialogOverviewComponent {
  projectTitle: string;
  description: string;
  clientName: string;
  clientEmail: string;
  clientContactPerson: string;
  clientContactName: string;
  clientLocation: string;


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { 
          projectTitle: this.projectTitle,
          description: this.description,
          clientName:this.clientName,
          clientEmail:this.clientEmail,
          clientContactPerson:this.clientContactPerson,
          clientContactName:this.clientContactName,
          clientLocation:this.clientLocation
         }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.clientName = result;
    });
  }
}

@Component({
  template: `

  `
})
export class DialogOverviewExampleDialog {

}
