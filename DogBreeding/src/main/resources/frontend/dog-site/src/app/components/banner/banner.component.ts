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
  displayProfile:boolean = true;
  constructor(private breederServ:BreederService) { }

  ngOnInit(): void {
  }


  loginDisplay(){
    this.logindisplay.displayLogin();

    console.log("attempting to open login" + this.breederServ.breeder);
 }

 toggleLoginIcon(){
  if(this.breederServ.breeder !== undefined){
    this.displayProfile = false;
    console.log("removing profile icon");
    this.ngOnInit();
  }
 }

}
