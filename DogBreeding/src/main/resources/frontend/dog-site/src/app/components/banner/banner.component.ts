import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BreederService } from 'src/app/services/Breeder/breeder.service';
import { CreatePuppyDisplayComponent } from '../create-puppy-display/create-puppy-display.component';
import { LoginDisplayComponent } from '../login-display/login-display.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @ViewChild(LoginDisplayComponent)
  logindisplay:LoginDisplayComponent;
  @ViewChild(NavBarComponent)
  navBar:NavBarComponent;
  displayProfile:boolean;
  constructor(private breederServ:BreederService) { }

  ngOnInit(): void {
  }

  async loginDisplay(){
    this.logindisplay.displayLogin();
  }

  async toggleLoginIcon(){
    if(this.logindisplay.getLoginDisplay == false){
      if(await this.breederServ.breeder[0] != undefined){
      this.displayProfile = true;
      this.ngOnInit();
      this.navBar.setSignedIn = true;
    }
  }
 }

 logout(){
   this.breederServ.breeder[0] = undefined;
   this.displayProfile = false;
   this.navBar.setSignedIn = false;
 }
}
