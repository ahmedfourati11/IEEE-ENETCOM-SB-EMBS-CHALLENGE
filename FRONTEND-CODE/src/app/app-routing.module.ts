import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModel } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ReadComponent } from './read/read.component';
import { RechercheComponent } from './recherche/recherche.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AnalyseComponent } from './analyse/analyse.component';

const routes: Routes = [
 { path:'index', component: IndexComponent },
 { path:'', component: SignInComponent },
 { path:'ajout', component: AjoutComponent},
 { path:'read/:id', component: ReadComponent},
 { path:'xxx', component: IndexComponent},
 { path:'analyse', component: AnalyseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
