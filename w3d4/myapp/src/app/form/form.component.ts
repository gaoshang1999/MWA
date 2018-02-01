import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";
import { Router } from "@angular/router"; 
import { HttpService } from '../http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent  {
  myForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private httpService: HttpService) {
        this.myForm = formBuilder.group({
        'name': ['', [Validators.required]],
        'email': ['', [
                Validators.required,
                Validators.pattern("[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
              ]],
        'post': ['', [Validators.required, this.lengthValidator]],    
        });
   }

  lengthValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value.length < 10 ) {
      return {length: true};
    }
    return null;
  }


  onSubmit() {
    console.dir(this.myForm.value);
    this.router.navigate(['thankyou']);
  }


  onGetdata(){
    this.httpService.getData().subscribe(
        data => {
           console.dir(data)
           this.myForm.controls['name'].setValue (data['name'] )
           this.myForm.controls['email'].setValue (data['email'])
           this.myForm.controls['post'].setValue (JSON.stringify(data['address']) )
    });

  }

}
