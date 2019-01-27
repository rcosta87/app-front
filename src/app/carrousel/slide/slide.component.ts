import { Component, OnInit, Input } from '@angular/core';
import { SlideCarrousel } from './../carrousel.model';

@Component({
  selector: 'mt-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {


  @Input() slide: SlideCarrousel;


  constructor() { }

  ngOnInit() {
  }

}
