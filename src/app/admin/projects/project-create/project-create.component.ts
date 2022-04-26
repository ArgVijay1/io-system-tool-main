import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  //projectForm: FormGroup;
 
  constructor(private fb:FormBuilder,
    public dialogRef: MatDialogRef<ProjectCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    console.log("form values"+JSON.stringify(this.projectForm.value))
    this.dialogRef.close();
  }
  ngOnInit(): void {

  //  this.projectForm=this.fb.group({
  //  name: [''],
  // Description:  [''],
  // clientName:  [''],
  // clientEmail: [''],
  // clientContactPerson: [''],
  // clientContactName: [''],
  // clientLocation: ['']
  //  })

  }

  projectForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  /*  Description: new FormControl(''),
    clientName: new FormControl(''),
    clientEmail:new FormControl(''),
    clientContactPerson:new FormControl(''),
    clientContactName:new FormControl(''),
    clientLocation:new FormControl(''),*/

  });

}
