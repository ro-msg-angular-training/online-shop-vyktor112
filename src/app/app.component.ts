import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'angular-frontend-project';
  constructor(private store: Store<any>) {}

  ngOnInit(){

  }
}
