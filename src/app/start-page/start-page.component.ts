import { StartPageLinks } from './../data-classes/json-class';
import { AppService } from './../app-service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  startPageData: StartPageLinks;

  constructor(private appService: AppService) {
   }

  ngOnInit() {
    this.getJsonData();
  }

  getJsonData(): void {
    this.startPageData = this.appService.getJSONData();
  }




}
