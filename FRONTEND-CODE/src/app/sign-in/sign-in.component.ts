import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  title = 'Challenge_EMBS';


  constructor(private http :HttpClient){
      
  }


  verifier(event: Event): void {
    const emailValue = (document.getElementById('exampleInputEmail1') as HTMLInputElement).value;
    const mdpValue = (document.getElementById('exampleInputPassword1') as HTMLInputElement).value;
    //alert(emailValue+mdpValue);
    if ( ! mdpValue.toString() && ! emailValue.toString() ) {
      alert('Veuillez saisir votre E-mail et votre mot de passe');

    }
    else if (! emailValue.toString()) {
      alert('Veuillez saisir votre E-mail');
    } 
    else if ( ! mdpValue.toString()) {
      alert('Veuillez saisir votre mot de passe');
    }
    else {
      var user ={
        email :emailValue,
        password :mdpValue
      }
      this.http.post('https://7d0c-196-187-240-64.ngrok-free.app/api/doctor/sign-in',user).subscribe(data => {
        localStorage.setItem('auth',JSON.stringify(data))
        location.replace("http://localhost:4200/index");
        
      },err =>{
        alert('Veuillez saisir votre e-mail ou mot de passe');

      }) 


    // else {
    //   location.replace("http://localhost:4200/index");
    // }
      
    
    }
  }
} 

