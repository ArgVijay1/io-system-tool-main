import { Injectable } from '@angular/core';
export interface ProjectData{
   id:number;
   name:string;
}

({
  providedIn: 'root'
})
export class ProjectDataService {
  private readonly colors = [
    'maroon',
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'purple',
    'fuchsia',
    'lime',
    'teal',
    'aqua',
    'blue',
    'navy',
    'black',
    'gray'
  ];
  private readonly names = [
    'DocumentManagement',
    'StoreManagement',
    'BookManagement',
    'inventoryManagement',
  ];
  constructor() { }  createNewUser(id: number): ProjectData {
    const name =
      this.names[this.getRandomArrayIndex(this.names.length)] +
      ' ' +
      this.names[this.getRandomArrayIndex(this.names.length)].charAt(0) +
      '.';

    return {
      id: id,
      name: name,
      //progress: Math.round(Math.random() * 100).toString(),
      //      color: this.colors[this.getRandomArrayIndex(this.colors.length)]
    };
  }

  create10Projects(): ProjectData[] {
    const projects: ProjectData[] = [];
    for (let i = 1; i <= 100; i++) {
      projects.push(this.createNewUser(i));
    }
    return projects;
  }

  private getRandomArrayIndex(length: number): number {
    return Math.round(Math.random() * (length - 1));
  }
}
