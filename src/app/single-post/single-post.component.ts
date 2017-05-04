import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Title }     from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
    public blogPosts;

  blogUrl = 'http://localhost:3000/p/';
  slug: any;
  private sub: any;
  constructor(private route: ActivatedRoute, private http: Http, private titleService: Title) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.slug = params['slug']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
       this.getSinglaPost(this.slug);
    });
  }

  
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  getSinglaPost(slug){
    this.http.get(this.blogUrl+slug)
      .map((res:Response) => res.json())
      .subscribe(
        data => { console.log(data), this.blogPosts = data, this.setTitle(this.blogPosts[0].title)},
        err => console.error(err),
        () => console.log('done')
      );
  }

}
