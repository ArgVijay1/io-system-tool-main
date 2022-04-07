import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProjectCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
