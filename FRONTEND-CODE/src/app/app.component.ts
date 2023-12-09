import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Challenge_EMBS';
  imagesList: string[] = [
    'assets/images/garcon.png',
    'assets/images/ajouter-un-ami.png',
    'src/assets/images/rechercher.png',
    'src/assets/images/modifier.png',
    'src/assets/images/vision.png'
  ];


  verifier(event: Event): void {
    const emailValue = (document.getElementById('exampleInputEmail1') as HTMLInputElement).value;
    const mdpValue = (document.getElementById('exampleInputPassword1') as HTMLInputElement).value;
    //alert(emailValue+mdpValue);
    if ( ! mdpValue.toString() && ! emailValue.toString() ) {
      alert('Please Enter Your Username And Your Password');

    }
    else if (! emailValue.toString()) {
      alert('Please Enter Your Username');
    } 
    else if ( ! mdpValue.toString()) {
      alert('Please Enter Your Password');
    }
    else { 
      location.replace("http://localhost:4200/index");
    }
} 
}
