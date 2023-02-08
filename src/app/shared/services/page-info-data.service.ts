import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IRouterData} from "../interfaces/router-data-interface";

@Injectable({
  providedIn: 'root'
})
export class PageInfoDataService {
  private _pageData = new BehaviorSubject<IRouterData>({} as IRouterData);
  $pageDataObservable = this._pageData.asObservable();
  constructor() { }

  setPageInfo(pageInfo: IRouterData) {
    return this._pageData.next(pageInfo)
  }
}
