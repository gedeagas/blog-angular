import { Component, OnInit } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public blogPosts;
  constructor(private http: Http) { }
  private blogUrl = 'http://localhost:3000/p/all'; 

  ngOnInit() {
    this.getHomePost();
  }


  getHomePost(){
    this.http.get(this.blogUrl)
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.blogPosts = data},
        err => console.error(err),
        () => console.log('done')
      );
  }

}
