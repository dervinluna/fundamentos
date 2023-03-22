import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
DomSanitizer
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'directivasFor';
  CSSURL:string;
  constructor(public sanitizer:DomSanitizer){
    this.CSSURL = '/assets/principal.css';
  }

  cursos:string[] = ["Guatemala", "Honduras", "Costa Rica", "Mexico"]
}
