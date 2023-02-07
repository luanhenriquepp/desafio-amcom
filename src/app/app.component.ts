import { Component } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {IRouterData} from "../shared/interfaces/router-data-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  iconUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYg4F1I7cE-M9thHdrM2ZvwBz9D6RTul0o9A&usqp=CAU'
  title = 'desafio-amcom';

  componentInfos: Data = {} as IRouterData;

  constructor(protected route: ActivatedRoute) {
    this.componentInfos = this.route.snapshot.data;
  }
}
