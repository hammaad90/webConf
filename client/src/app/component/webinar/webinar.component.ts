import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-webinar',
  templateUrl: './webinar.component.html',
  styleUrls: ['./webinar.component.css']
})
export class WebinarComponent implements OnInit {
public showCompany = false;
  baseUri:string = 'http://localhost:3030/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveForm(data: NgForm) {
    this.http.post(this.baseUri + '/create', data.value).subscribe(res => {
      console.log('response from server', res);
      data.reset();
      alert('Form submiited')
      this.router.navigate([''])

    })
 }

 showCorporate(){
   this.showCompany =  true;
 }

 showIndividual() {
  this.showCompany =  false;
 }

}
