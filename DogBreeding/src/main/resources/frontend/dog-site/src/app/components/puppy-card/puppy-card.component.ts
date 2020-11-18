import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dog } from 'src/app/Modules/dog/dog.module';
import { DogService } from 'src/app/services/Dog/dog.service';

@Component({
  selector: 'app-puppy-card',
  templateUrl: './puppy-card.component.html',
  styleUrls: ['./puppy-card.component.css']
})
export class PuppyCardComponent implements OnInit {

  @Input("dog") dog:Dog;
  dogCard:Dog;

  constructor(private router:Router, private dogServ:DogService) { }

  ngOnInit(): void {
    this.dogCard = this.dog;
  }

  dogInfo(){
    this.router.navigate(["/dog"]);
  }

}
