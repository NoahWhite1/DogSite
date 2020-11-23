import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreederService } from 'src/app/services/Breeder/breeder.service';
import { LoginDisplayComponent } from '../login-display/login-display.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @ViewChild(LoginDisplayComponent)
  logindisplay:LoginDisplayComponent;
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
    }
  }
 }

 logout(){
   this.breederServ.breeder[0] = undefined;
   this.displayProfile = false;
 }

}
