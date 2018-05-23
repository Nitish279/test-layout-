import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})



@Injectable()
export class SidebarComponent implements OnInit{
  public monitoringData: any;
  public leftNavJson = "monitoring";
    constructor(private http: Http) {
         var obj;
         this.getJSON().subscribe(data => {
           obj = data;
           this.monitoringData = obj.monitoring;
          //  console.log(obj);
          });
        //  console.log(obj);
    }

    public getJSON(): Observable<any> {
         return this.http.get('../../../../assets/mock-data/'+this.leftNavJson+'.json').map((res: any) => res.json());
     }

     ngOnInit() {

     }

    //  leftNavData() {

    //     var obj;
    //     this.getJSON().subscribe(data => {
    //       obj = data;
    //       this.monitoringData = obj.monitoring;
    //       console.log(obj);
    //      });
    //    //  console.log(obj);
    //  }

     transformLeftNavData = (event: any) => {
      console.log(event);
      var obj;
      this.leftNavJson = event;
        this.getJSON().subscribe(data => {
          obj = data;
          this.monitoringData = obj[event];
         });
  }

  //    getValue = (item : string) =>{
  //     console.log(item);
  // }
}
