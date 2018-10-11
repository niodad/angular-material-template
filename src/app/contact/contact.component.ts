import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import { Emailmessage } from './emailmessage';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit  {
  emailmessage: Emailmessage = {
     'Name': '',
     'Email': '',
     'Subject': '',
     'Body': ''

  };
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
ResetEmail() {
  this.emailmessage.Name = '';
  this.emailmessage.Email = '';
  this.emailmessage.Subject = '';
  this.emailmessage.Body = '';


}
  SendMail() {

    console.log(this.emailmessage);
    return this.http.post('https://gitos.azurewebsites.net/api/email', this.emailmessage)
    .subscribe(Response => {
      console.log(Response);
    });
  }

}
