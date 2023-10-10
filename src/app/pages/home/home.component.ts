import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAliveReadCaseLeft:boolean=false;
  isAliveReadCaseRight:boolean=false;
  isAliveReadMore:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
