import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { UtilisateurComponent } from './utilisateur.component';
import {UtilisateurService} from '../../shared/services/index';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  declarations: [UtilisateurComponent]
  ,
  providers: [
    UtilisateurService
  ]
})
export class UtilisateurModule { }
