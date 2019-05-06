import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-intro',
  templateUrl: './page-intro.component.html',
  styleUrls: ['./page-intro.component.css']
})
export class PageIntroComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
