import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-legacy-system',
  templateUrl: './legacy-system.component.html',
  styleUrls: ['./legacy-system.component.scss']
})
export class LegacySystemComponent implements OnInit {
  @ViewChild('attachments') attachment: any;

  fileList: File[] = [];
  listOfFiles: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

onFileChanged(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile = event.target.files[i];
      this.fileList.push(selectedFile);
      this.listOfFiles.push(selectedFile.name)
  }

  this.attachment.nativeElement.value = '';
}

    removeSelectedFile(index) {
    // Delete the item from fileNames list
    this.listOfFiles.splice(index, 1);
    // delete file from FileList
    this.fileList.splice(index, 1);
    }
}
