import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Dog } from 'src/app/Modules/dog/dog.module';
import { BreederService } from 'src/app/services/Breeder/breeder.service';

@Component({
  selector: 'app-create-puppy-display',
  templateUrl: './create-puppy-display.component.html',
  styleUrls: ['./create-puppy-display.component.css']
})
export class CreatePuppyDisplayComponent implements OnInit {

  isDisplayed:boolean = false;
  name:string = "";
  breed:string = "";
  age:number;
  mother:string = "";
  father:string = "";
  newDog:Dog = new Dog(0,"blank"," ",0," "," ",this.breederServ.breeder);

  constructor(private breederServ:BreederService) { }

  ngOnInit(): void {
  }

  toggleDisplay(){
    this.isDisplayed = !this.isDisplayed;
  }

  get isPuppyCreationDisplayed(){
    return this.isDisplayed;
  }

  createDog(){

    let newDog = {
      "name" : this.name,
      "breed" : this.breed,
      "age" : this.age,
      "mother" : this.mother,
      "father" : this.father,
      "breeder" : this.breederServ.breeder[0],
      "dId" : 0,
    }
    this.breederServ.addDog(newDog);
    console.log(this.newDog);
    console.log(this.breederServ.breeder);

    
    this.toggleDisplay();
    
  }
}
