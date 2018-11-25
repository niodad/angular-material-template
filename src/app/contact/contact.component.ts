import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { Emailmessage } from '../Models/emailmessage';
import {MailService} from '../services/mail.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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

  constructor(private mailservice: MailService) { }

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
    return this.mailservice.SendMail(this.emailmessage)
    .subscribe( res => {
      console.log(res);
  }
);
  }

}
