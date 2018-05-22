import * as BaseUrl from './baseurl.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Utilisateur} from '../models/utilisateur';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class UtilisateurService {
  handleErrorPromise: any;
   constructor(private http: HttpClient) { }
   getUtilisateur() {
 return this.http.get<Utilisateur[]>( BaseUrl.Url + 'utilisateur/utilisateur');
   }
   addUtilisateur( model: any) {
     const utilis = JSON.stringify(model);
    return this.http.post( BaseUrl.Url + 'utilisateur/utilisateur', utilis, httpOptions);
   }
   updateUtilisateur( model: any) {
    const utilis = JSON.stringify(model);
    return this.http.put( BaseUrl.Url + 'utilisateur/utilisateur' + '/' + model.id, utilis, httpOptions);
  }
  getById(id): Observable<any> {
    return this.http.get(BaseUrl.Url + 'utilisateur/utilisateur' + '/' + id );
  }
  supprimerUtilisateur(id: number) {
    return this.http.delete(BaseUrl.Url + 'utilisateur/utilisateur' + '/' + id, httpOptions );
  }
}