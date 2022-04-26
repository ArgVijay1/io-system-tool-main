import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm:FormGroup;
  constructor(private fb:FormBuilder,
    public dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  projectForm: FormGroup = new FormGroup({
    //name: new FormControl(''),
  });

  onNoClick(): void {
    console.log("form values"+JSON.stringify(this.userForm.value))
    this.dialogRef.close();
  }


}
