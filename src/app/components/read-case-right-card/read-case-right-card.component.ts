import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-case-right-card',
  templateUrl: './read-case-right-card.component.html',
  styleUrls: ['./read-case-right-card.component.css']
})
export class ReadCaseRIGHTCardComponent implements OnInit {

  @Input()
  cardImage:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDescriptionRight:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
