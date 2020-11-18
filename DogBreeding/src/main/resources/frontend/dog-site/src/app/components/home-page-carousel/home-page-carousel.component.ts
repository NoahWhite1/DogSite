import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-carousel',
  templateUrl: './home-page-carousel.component.html',
  styleUrls: ['./home-page-carousel.component.css']
})
export class HomePageCarouselComponent implements OnInit {

  currentImage:string;
  allImages:Array<string> = [];
  constructor() { }

  ngOnInit(): void {
    this.allImages.push('../../../assets/images/carousel/puppyGroup1.jpg');
    this.allImages.push('../../../assets/images/carousel/puppyGroup2.jpg')
    this.currentImage = this.allImages[0];
  }

}
