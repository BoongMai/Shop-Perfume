import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Main: OwlOptions = {
    loop: true,
    mouseDrag: true,
    //stagePadding: 10,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay:true,
    autoplayTimeout:8000,
    autoplayHoverPause:true,
    navSpeed: 50,
    navText: ['<', '>'],
    responsive: {
    0: {
        items: 1
    },
    180: {
        items: 2
      },
    100: {
        items: 3
      },
    30: {
        items: 4
    },
    200: {
      items: 1
    }
  },
    nav: true
  }

}
