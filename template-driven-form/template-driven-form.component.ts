import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit {
  countryList:country[]=[
    new country('1','India'),
    new country('2','Japan'),
    new country('3','Usa')
  ];
  contact!:contact;
  ngOnInit(): void {
    this.contact={
      name:"Manoj",
      email:"manojkiyan23032004@gmail.com",
      password:"Manoj2316@",
      gender:"Male",
      subscribe:true,
      address:{city:"THANJAVUR" ,street:"THULUKKAVIDUTHI(NORTH)",pincode:"614623"}

    }
  }




  onSubmit(form:NgForm) {
    console.log(form)//.value)

  }

}
class country{
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id = id;
    this.name = name

  }

}

class contact{
  name!:string;
  email!:string;
  password!:string;
  gender!:string;
  subscribe!:boolean;
  address!:{
    city:string;
    street:string;
    pincode:string;

  }



}