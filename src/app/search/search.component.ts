import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, Response} from "@angular/http";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private _baseUrl = 'https://test-api.javascript.ru/v1/kashaevadasha/users/';
  title = "Search people";
  // public users = {email:"sergey@mail.com", fullName: "Sergiy Pereverziev"}
  public str:string = "";
  public value;
  public arrNames = [];

  constructor(private _http:Http) { }

  // addNewUsers() {
  //   let requestRes = this._http.post(this._baseUrl, this.users).share();
  //   requestRes.subscribe(
  //     (response: Response) => {
  //       console.log(response.json());
  //   })
  // }

  ngOnInit() {
     const res = Observable.fromEvent(document.getElementById('name'), 'keypress')
     .map((event: Event) => {
        let x = (event.target as HTMLInputElement).value;
        console.log(x);
        //this.arrNames = [];
        return x;
     })
     .filter((event)=>{return event.length >= 2;})
     .switchMap( event => this._http.get(this._baseUrl))
      .map((response:Response) => response.json())
      .subscribe(names => {
        names.forEach(elem => {
          let regex = new RegExp(`${this.value}`, 'ig');
          if(regex.test(elem.fullName)) {
          this.arrNames.push(elem.fullName);
          }
        });
      });
  }

  clear() {
    this.arrNames = [];
    this.value = "";
  }

}
