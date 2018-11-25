import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  apiUrl = '';
  headerOptions = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }

  SendMail(mailmessage) {

    const requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: this.headerOptions });

    return this.http.post(this.apiUrl, JSON.stringify(mailmessage), requestOptions)
      .pipe(map(x => x.json));
  }
}
