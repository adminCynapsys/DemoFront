
import { Component, Input, Injectable, OnInit, Directive } from '@angular/core';

import {UtilisateurService} from '../../shared/services/index';
import {Utilisateur} from '../../shared/models/utilisateur';
import { NgForm, FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
 public utilisateurs: Utilisateur[];
public utilisateur: any = {};
public isEdit: false;
closeResult: string;
  constructor( private  utilisateurService: UtilisateurService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getUtilisateur();
  }


getUtilisateur() {
 this.utilisateurService.getUtilisateur().subscribe(
    res => {this.utilisateurs = res;
    console.log(this.utilisateurs);
    });
}

open(content) {
  this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
  } else {
      return  `with: ${reason}`;
  }
}

saveUtilisateur() {
  if (this.utilisateur.id === undefined) {
  this.utilisateurService.addUtilisateur(this.utilisateur).subscribe(res => {


  } );
} else {
  this.utilisateurService.updateUtilisateur(this.utilisateur).subscribe(res => {
      this.ngOnInit();
      } );
}
}
supprimerUtilisateur(id: number, index: number ) {

this.utilisateurService.supprimerUtilisateur(id).subscribe(res => {
  this.utilisateurs.splice(index, 1);
});

}
reset() {
this.utilisateur = {};
}
getById(idClient: number , index: number) {
  this.utilisateurService.getById(idClient).subscribe(
    res => {
      this.utilisateur = res;
    }
  );
}
}
