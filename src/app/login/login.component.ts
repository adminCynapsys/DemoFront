import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm, FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import {Utilisateur} from '../shared/models/utilisateur';
import { TranslateService } from '@ngx-translate/core';
import {UtilisateurService} from '../shared/services/index';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    utilisateur: any = {};
    public errorMsg ;
    constructor(public router: Router, private utilisateurService: UtilisateurService, private route: Router) {}

    ngOnInit() {}

    onLoggedin() {

       this.utilisateurService.login(this.utilisateur).subscribe(
           res => {this.utilisateur = res;
            localStorage.setItem('isLoggedin', 'true');
            this.route.navigate(['/dashboard']);
         },
          (err: HttpErrorResponse) => {

            alert("Identifant/Mot de passe erroné");
            window.location.reload();
          });

    }
}
