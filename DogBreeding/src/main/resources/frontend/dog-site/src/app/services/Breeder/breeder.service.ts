import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';

@Injectable({
  providedIn: 'root'
})
export class BreederService {

  breeder:Breeder;
  url:string = `http://localhost:8080`;
  isSignedIn:boolean = false;

  constructor(private http:HttpClient) { }

  async getAllBreeders():Promise<Array<Breeder>>{
    const breeders:Array<Breeder> = await this.http.get<Array<Breeder>>(this.url + `/breeders`).toPromise();
    return breeders;
  }

  async getBreederById(username:number):Promise<Breeder>{
    const breeder:Breeder = await this.http.get<Breeder>(this.url + `/breeders/${username}`).toPromise();
    return breeder;
  }

  async getBreederByUsername(username:string):Promise<Breeder>{
    const breeder:Breeder = await this.http.get<Breeder>(this.url + `/breeders/?${username}`).toPromise();
    return breeder;
  }
  
  get loggedBreeder(){
    return this.breeder;
  }
}
