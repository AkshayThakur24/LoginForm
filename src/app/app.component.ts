import { Component } from '@angular/core';
import studentData from '../assets/students.json'

interface Student {  
  id: Number;  
  name: String;  
  email: String;  
  gender: String;  
}  
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  students: Student[] = studentData; 
  id:any;
  name:any;
  gender:any;
  email:any;

  onClick(){
    let flag=false;
    for(let i=0;i<this.students.length;i++){
      
      if(this.students[i].id==this.id){
        if(this.students[i].name==this.name){
          if(this.students[i].gender==this.gender){
            if(this.students[i].email==this.email){
              flag=true;
              break;
            }
          }
        }


      }

      

    }

    if(flag==true){
      alert("Login Successfull")
    }
    else{
      alert("Not Successfull")
    }

  }
  
  
}
