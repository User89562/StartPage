import { STARTPAGE } from './../json';
// import { STARTPAGE } from '../start-page-json';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AppService {

constructor() { }

getJSONData(): any {
  return STARTPAGE;
}

}

