import { SlideCarrousel } from './carrousel.model';
import { CarrouselService } from './carrousel.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'mt-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  slides: SlideCarrousel[];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "arrows": true};

  constructor(private slideService: CarrouselService) { }

  ngOnInit() {
    this.slideService.getSlides()
    .subscribe(slides => this.slides = slides)
  }


}
