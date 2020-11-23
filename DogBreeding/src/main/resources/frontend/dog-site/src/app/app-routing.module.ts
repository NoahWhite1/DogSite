import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreederPageComponent } from './components/breeder-page/breeder-page.component';
import { DogPageComponent } from './components/dog-page/dog-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
{path: 'home', component: HomePageComponent},
{path: 'breeders', component: BreederPageComponent},
{path: 'dog', component: DogPageComponent},
{path: '**', component:HomePageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

