import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-content',
  templateUrl: './short-content.component.html',
  styleUrls: ['./short-content.component.css']
})
export class ShortContentComponent implements OnInit {

  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string=""
  @Input()
  cardSubtitle:string=""
  @Input()
  cardSubDescription:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
