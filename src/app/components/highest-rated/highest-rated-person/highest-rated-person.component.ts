import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highest-rated-person',
  templateUrl: './highest-rated-person.component.html',
  styleUrls: ['./highest-rated-person.component.scss']
})
export class HighestRatedPersonComponent implements OnInit {
  @Input() personName : string;
  @Input() position : string;
  @Input() salary : string;
  @Input() avatar : string;

  constructor() { }

  ngOnInit() {
  }

}
