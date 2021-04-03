import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:Contact = new Contact();

  constructor(){
  }

  ngOnInit(): void{
  }

  submitContactForm(){
    console.log("Form submitted: " + this.contact);
  }

}
