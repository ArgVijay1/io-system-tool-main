import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../tables/data.service';
/*export interface clientData {
  projectTitle:string;
  clientName:string
}*/

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {
  //projectForm:FormGroup;
  
  project : any;
  projectForm: FormGroup;
  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<ProjectEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.project = data;
    console.log("edit modal "+this.project)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEdit(){
    this.projectForm.setValue({
      name:'vijay',
      title:'Angular'
    })
  }

  ngOnInit(): void {
    this.projectForm=this.fb.group({
      name: [''],
      title:['']
    })
    console.log("project form values "+this.projectForm.toString())
  }

  setData(){
      return this.projectForm.controls['name'];
      console.log("in set data "+this.projectForm.controls)
  }
  getData(row:any){
    this.projectForm.controls['name'].setValue(row.name);
    console.log("in get data "+row)
    console.log("in get data controls "+this.projectForm.controls)
  }

}
