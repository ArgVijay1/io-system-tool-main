import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-migration-management',
  templateUrl: './migration-management.component.html',
  styleUrls: ['./migration-management.component.scss']
})
export class MigrationManagementComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  setTab(tabname: string) {
    console.log(tabname);
    this.router.navigateByUrl('/projects/migration-mgmt/'+tabname);
  }
}
