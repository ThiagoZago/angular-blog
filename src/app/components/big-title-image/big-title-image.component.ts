import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-title-image',
  templateUrl: './big-title-image.component.html',
  styleUrls: ['./big-title-image.component.css']
})
export class BigTitleImageComponent implements OnInit {

  @Input()
  titleBigContent:string="";
  @Input()
  imageBigContent:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
