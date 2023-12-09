import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
  
})
export class AjoutComponent {



  utilisateur = {
    nom: '',
    prenom: '',
    email: '',
    phoneNumber: '',
    age:'',
    cin: '',
    maladies: [],
    tension: ''
 };

 isInvalid: boolean = false; // Variable pour vérifier la validation au focus


 constructor(private http :HttpClient,private router:Router){
      
 }

  onFocus() {
    this.isInvalid = true; // Activer la validation au focus
  }

  onBlur() {
    this.isInvalid = false; // Désactiver la validation au blur
  }
 maladies = [
    {id: 1, nom: 'hypertension artérielle'},
    {id: 2, nom: 'Insuffisance cardiaque'},
   

 ];
 onCheckChange(event: any, maladieId: number) {
  if (event.target.checked) {
      this.utilisateur.maladies.push();
  } else {
      this.utilisateur.maladies = this.utilisateur.maladies.filter(maladie => maladie !== maladieId);
  }
}
 ajouterUtilisateur() {
    console.log(this.utilisateur);
 }

 maladiesList = ['Hypertension', 'Insuffisance cardiaque'];

 onSubmit(utilisateurForm: NgForm) {
   console.log(utilisateurForm)
 }
 message: string = ''; 

 displayMessage(): void {
   this.message = 'Votre demande est ajoutée';
 }
 showCard: boolean = false;


 toggleCard() {
   this.showCard = !this.showCard;
 }

 imageSrc: string | ArrayBuffer | null = null;



  garconImageSrc: string | ArrayBuffer | null = 'chemin/par/defaut/vers/la/photo_du_garcon.png';

  garconImageSrc0: string | ArrayBuffer | null = 'chemin/par/defaut/vers/la/photo_du_garcon.png'; // Mettez ici votre chemin par défaut

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.garconImageSrc = e.target.result; // Mettre à jour la variable garconImageSrc avec la nouvelle image
      };
      reader.readAsDataURL(file);
    }
  }

  // yiraaaawaaaaaa7
  verifier(event: Event): void {
    event.preventDefault(); // Pour éviter le comportement par défaut du formulaire (rechargement de la page)
  
    const nom = (document.getElementById('nom') as HTMLInputElement).value.trim();
    const prenom = (document.getElementById('prenom') as HTMLInputElement).value.trim();
    const genre = (document.getElementById('genre') as HTMLInputElement).value.trim();
    const date_de_naissance = (document.getElementById('date') as HTMLInputElement).value.trim();
    const numero_de_telephone = (document.getElementById('numero') as HTMLInputElement).value.trim();
    const CIN = (document.getElementById('cin') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const mdp = (document.getElementById('mdp') as HTMLInputElement).value.trim();
  
    if (!nom || !prenom || !date_de_naissance || !numero_de_telephone || !CIN || !email || !mdp || !genre) {
      alert('Veuillez vérifier les champs');
    } else {
      var user={
        cin: CIN,
        date: date_de_naissance,
email:email,
firstName:nom,
gender:genre,
lastName:prenom,
password: mdp,
phoneNumber:numero_de_telephone,
      };
      this.http.post('https://7d0c-196-187-240-64.ngrok-free.app/api/patient/sign-up',user).subscribe(data => {
        this.router.navigate(['/index']);
        
      },err =>{
        alert('');

      }) 
    }
  }
  
  

}
