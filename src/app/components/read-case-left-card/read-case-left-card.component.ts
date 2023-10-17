import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-case-left-card',
  templateUrl: './read-case-left-card.component.html',
  styleUrls: ['./read-case-left-card.component.css']
})
export class ReadCaseLEFTCardComponent implements OnInit {

  @Input()
  cardImage:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDescriptionLeft:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
