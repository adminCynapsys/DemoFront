import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {UtilisateurService} from '../shared/services/index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule, HttpClientModule],
    declarations: [LoginComponent],
    providers: [
        UtilisateurService
      ]
})
export class LoginModule {}
