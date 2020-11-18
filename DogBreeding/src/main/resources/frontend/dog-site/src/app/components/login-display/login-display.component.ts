import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { BreederService } from 'src/app/services/Breeder/breeder.service';
import { FormsModule } from '@angular/forms//forms';
@Component({
  selector: 'app-login-display',
  templateUrl: './login-display.component.html',
  styleUrls: ['./login-display.component.css']
})
export class LoginDisplayComponent implements OnInit {

  username:string = "";
  password:string = "";
  loginDisplay:boolean = false;
  breeder:Breeder;

  constructor(private breederServ:BreederService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  async loginBreeder(){

    this.breeder = await this.breederServ.getBreederByUsername(this.username);
    if(this.breeder[0].username === this.username && this.breeder[0].password === this.password){
      this.breederServ.breeder = this.breeder;
      this.username = "";
      this.password = "";
      this.loginDisplay = false;
    }
    else{
      this.snackBar.open("Invalid Credentials", "close", {
        duration: 2000,        
      });
    }
  }

  displayLogin(){
    this.loginDisplay = !this.loginDisplay;
  }

}
