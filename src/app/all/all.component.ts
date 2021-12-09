import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  param:any = {};
  
  constructor(private _route: ActivatedRoute){}
    
  ngOnInit(){
        this._route.params.subscribe(params => this.param = params)
    }

}