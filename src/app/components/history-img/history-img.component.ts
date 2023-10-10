import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-history-img',
  templateUrl: './history-img.component.html',
  styleUrls: ['./history-img.component.css']
})
export class HistoryImgComponent implements OnInit {


  @Input()
  cardImageOne:string=""
  @Input()
  cardImageTwo:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
