import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {

  userId: string | null = null;
  profile : any=null;
  histories :any=[];

  constructor(private activated :ActivatedRoute,private http :HttpClient){
    this.activated.paramMap.subscribe(params => {
      // Get the user ID from route parameters
      if(params.get('id')){
        this.userId = this.activated.snapshot.paramMap.get('id');
      }
    
      console.log('User ID:', this.userId);
    });
  }


  ngOnInit(): void {
    this.http.get<any[]>('https://7d0c-196-187-240-64.ngrok-free.app/api/patient/profile/'+this.userId).subscribe(data => {
      console.log(data);
      
      this.profile=data;
    } ); 
      this.http.get<any[]>('https://7d0c-196-187-240-64.ngrok-free.app/api/patient/history/'+this.userId).subscribe(data => {
        console.log(data);
        data.forEach(element =>{
          
            if(element.state==0){
              element.state="colorG"
            } 
    
            else if(element.state==1){
              element.state="colorY"
            } 
            else {
              element.state="colorR"
            }
      });
         this.histories=data;
      
      });  
   }  

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    // Ajoutez d'autres options selon vos besoins
  ];

  selectedOptions: string[] = [];
  utilisateur = {
    nom: '',
    prenom: '',
    tension: '',
    fréquenceC:'',
    maladies: []
 };
 
 Data = [
  { id: 1, name: 'Mouna KETATA',PA:'110',FC:'90%',Ox:'70BPM' },
  { id: 2, name: 'Bob',PA:'110',FC:'88%',Ox:'75BPM' },
  { id: 3, name: 'Carol',PA:'100',FC:'97%',Ox:'90BPM' },
  { id: 4, name: 'David',PA:'130',FC:'75%',Ox:'70BPM' },
  { id: 5, name: 'Eve',PA:'120',FC:'98%',Ox:'76BPM'},
 
];

 onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Détails de l\'utilisateur:', this.utilisateur);
      form.reset();
    }
 }
 message: string = ''; 

 displayMessage(): void {
   this.message = 'Votre demande est ajoutée';
 }
}
