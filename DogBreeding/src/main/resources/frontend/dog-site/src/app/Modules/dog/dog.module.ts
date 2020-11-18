import { Breeder } from '../breeder/breeder.module';


export class Dog {
  dId:number;
  name:string;
  breed:string;
  age:number;
  mother:string;
  father:string;
  breederList:Breeder;

  constructor(dId:number, name:string, breed:string, age:number, mother:string, father:string, breederList:Breeder){
    this.dId = dId;
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.mother = mother;
    this.father = father;
    this.breederList = breederList;
  }
 }
