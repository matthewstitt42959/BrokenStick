import { Component, OnInit } from '@angular/core';
import { TCarousel } from '../../carousel/carousel.model';
import { Router, ActivatedRoute } from '@angular/router'; 
import { CarouselService } from '../../carousel/carousel.service';

@Component({
  selector: 'app-whatif',
  templateUrl: './whatif.component.html',
  styleUrls: ['./whatif.component.css']
})
export class WhatifComponent implements OnInit {

  whatifs: TCarousel[];
  whatifsChanged: TCarousel[];
  
  constructor(private carouselService: CarouselService, 
  	private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   
   this.carouselService.whatifsChanged.subscribe(
    (whatifs: TCarousel[]) => {
      this.whatifs = whatifs; 
    }
    ) 
  this.whatifs = this.carouselService.getWhatIfs(); 
  }
 
  }