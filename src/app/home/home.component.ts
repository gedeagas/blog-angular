import { Component, OnInit } from '@angular/core';
import { TruncateModule } from 'ng2-truncate';

import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


import {Observable} from 'rxjs/Rx';
import { Title }     from '@angular/platform-browser';

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
  constructor(private http: Http, private titleService: Title) { }
  private blogUrl = 'http://localhost:3000/p/all'; 

  ngOnInit() {
    this.getHomePost();
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  getHomePost(){
    this.http.get(this.blogUrl)
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.blogPosts = data, this.setTitle('Home Post All List')},
        err => console.error(err),
        () => console.log('done')
      );
  }

}

