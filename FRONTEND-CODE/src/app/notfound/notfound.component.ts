import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  utilisateur = {
    nom: '',
    prenom: '',
    maladies: '',
    tension: ''
 };

 ajouterUtilisateur() {
    console.log(this.utilisateur);
 }
}
