import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.css']
})
export class TitleSectionComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
