import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent {
  myForm:any;
  i: number = 0;
  authFullName ="";
  history : any[]=[];



  constructor( private formbuilder:FormBuilder,private http :HttpClient,private router: Router) { 
    this.myForm=this.formbuilder.group({
      nom:['',[Validators.required]],
      DN:['',[Validators.required]],
      genre:['',[Validators.required]],
      age:['',[Validators.required]],
      PA:['',[Validators.required]],
      FC:['',[Validators.required]],
      Ox:['',[Validators.required]],
      items:this.formbuilder.array([
        this.formbuilder.group({
          nom:[""],
          DN:[""],
          PA:[""],
          FC:[""],
          Ox:[""],
        })
      ])
    })
    
  }


 ngOnInit(): void {
  var data =localStorage.getItem('auth') ;
     if(data) {
      var auth = JSON.parse(data)
      this.authFullName=auth.firstName +" " +auth.lastName 
     };
  this.getPatientHistories(0,12)

 }

 onSearch() {
  if(this.searchTerm) {
    this.history=this.history.filter(el => el.patient.firstName.toString().startsWith(this.searchTerm))
  }else {
    this.getPatientHistories(0,10)
  }
  
    
 }
  searchTerm = '';

  users = [
     { id: 1, name: 'Mouna KETATA',DH:'02/02/2020',genre:'Female',age:'20',PA:'110',FC:'90%',Ox:'70BPM' },
     { id: 2, name: 'xxx',DH:'02/02/1995',genre:'Male',age:'50',PA:'110',FC:'88%',Ox:'75BPM' },
     { id: 3, name: 'yyy',DH:'31/07/1985',genre:'Female',age:'52',PA:'100',FC:'97%',Ox:'90BPM' },
     { id: 4, name: 'Dzzz',DH:'08/12/1952',genre:'Male',age:'38',PA:'130',FC:'75%',Ox:'70BPM' },
     { id: 5, name: 'ffff',DH:'19/12/1933' ,genre:'Female',age:'44',PA:'120',FC:'98%',Ox:'76BPM'},
    
  ];
  doctor=[
    {id:1, name:'DR.Kammoun'},
  ]


  onNavigateToUserInfo(id :number){
    this.router.navigate(['/read',id]);
        
  }
  
  get filteredUsers() {
     return this.users.filter(user =>
       user.name.toLowerCase().startsWith(this.searchTerm.toLowerCase())
     );
  }
  get items(){
    return this.myForm.get('items') as FormArray; 
  }
  delete(i:any){
this.items.removeAt(i)
  }


  effacerLigne(id: number) {
    var index= [...this.history].findIndex( (el) => el.id ==id);
    this.http.get<any[]>('https://7d0c-196-187-240-64.ngrok-free.app/api/patient/remove/measure/'+id).subscribe(data => {  
    this.history.splice(index, 1);
  });
  }



  getPatientHistories(page : number,size : number){
    this.http.get<any[]>('https://7d0c-196-187-240-64.ngrok-free.app/api/patient/all/'+page+'/size/'+size).subscribe(data => {  
    if(data){   
      data.forEach(element => {
        element.name =  element.patient.firstName + " " + element.patient.lastName  
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
  this.history=data;
    }
  });}


}
