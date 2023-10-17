import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more-card',
  templateUrl: './read-more-card.component.html',
  styleUrls: ['./read-more-card.component.css']
})
export class ReadMoreCardComponent implements OnInit {

  @Input()
  cardTitle:string="";
  @Input()
  cardDescriptionRead:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
