import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { BreederService } from 'src/app/services/Breeder/breeder.service';
import { CreatePuppyDisplayComponent } from '../create-puppy-display/create-puppy-display.component';
import { LoginDisplayComponent } from '../login-display/login-display.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild(LoginDisplayComponent)
  loginDisplayComponent:LoginDisplayComponent;
  @ViewChild(CreatePuppyDisplayComponent)
  addPuppyDisplay:CreatePuppyDisplayComponent;
  isSignedIn:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  homePage(){
    this.router.navigate(['/home'])
  }

  breederPage(){
    this.router.navigate(['/breeders'])
  }

  createDog(){
    this.addPuppyDisplay.toggleDisplay();
  }

  get getSignedIn(){
    return this.isSignedIn;
  }

  set setSignedIn(value:boolean){
    this.isSignedIn = value;
  }
}
