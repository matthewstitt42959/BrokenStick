import { Component, OnInit } from '@angular/core';
import { TCarousel } from '../carousel/carousel.model';
import { Router, ActivatedRoute } from '@angular/router'; 
import { CarouselService } from '../carousel/carousel.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'], 
 
})
export class CarouselComponent implements OnInit {
 // To create the image carousel for the site
  
  thumbs: TCarousel[];
  thumbsChanged: TCarousel[];
  
  constructor(private carouselService: CarouselService, 
  	private router: Router, private route: ActivatedRoute) {
    this.navLink();
     }

  ngOnInit() {
   
  }
  navLink(){
   
    if(this.router.url === '/project') {
    this.thumbs = this.carouselService.getThumbs();    
    }
    else if(this.router.url === '/project/whatif') {
    this.thumbs = this.carouselService.getWhatIfs();    
    }
    else if(this.router.url === '/project/signs') {
    this.thumbs = this.carouselService.getSigns();    
    }
    return this.thumbs; 
  }
    
 }  