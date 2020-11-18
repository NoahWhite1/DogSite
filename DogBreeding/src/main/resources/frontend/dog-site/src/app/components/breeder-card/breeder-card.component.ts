import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Breeder } from 'src/app/Modules/breeder/breeder.module';
import { Input } from '@angular/core';

@Component({
  selector: 'app-breeder-card',
  templateUrl: './breeder-card.component.html',
  styleUrls: ['./breeder-card.component.css']
})
export class BreederCardComponent implements OnInit {
  
  @Input("breeder") breeder:Breeder;
  breederCard:Breeder;

  constructor() { }

  ngOnInit(): void {
    this.breederCard = this.breeder;
  }

}
