import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})

export class AppComponent {
  //FOR TOOL REDUX
  showReduxTool:boolean=true;
  showMonitor = (
    ENV === 'development'
    &&  this.showReduxTool
    && !AOT
    && ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
  );
  //FOR TOOL REDUX
}
