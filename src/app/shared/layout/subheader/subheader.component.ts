import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ActivatedRoute, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css']
})
export class SubheaderComponent implements OnInit {
  public subHeaderData: any;
  constructor(private http: Http, private _router: Router) {
    let obj;
    this.getJSON().subscribe(data => {
      obj = data;
      this.subHeaderData = obj.left_nav_content;
      // console.log(this.subHeaderData);
     });
   //  console.log(obj);
}

public getJSON(): Observable<any> {
    return this.http.get('../../../../assets/mock-data/mock_data.json').map((res: any) => res.json());
}

  ngOnInit() {
    // this._router.navigate(['/monitoring/onespace']);
  }
  // transformLeftNavData = (event: any) => {
  //   console.log(event);
  // }
}
