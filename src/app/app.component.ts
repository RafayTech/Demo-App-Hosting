import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private facebookService: FacebookService) { }
    ngOnInit(): void {
      this.initFacebookService();
    }
    private initFacebookService(): void {
      const initParams: InitParams = { xfbml:true, version:'v15.0'};
      this.facebookService.init(initParams);
    }
}