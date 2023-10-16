import { Component, OnInit } from '@angular/core';
import { ReadCaseLEFTCardComponent } from '../../components/read-case-left-card/read-case-left-card.component';
import { ReadCaseRIGHTCardComponent } from '../../components/read-case-right-card/read-case-right-card.component';
import { ReadMoreCardComponent } from '../../components/read-more-card/read-more-card.component';

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
