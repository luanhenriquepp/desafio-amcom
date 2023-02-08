import {Component, Input} from '@angular/core';
import {PageInfoDataService} from "../../services/page-info-data.service";
import {Observable} from "rxjs";
import {IRouterData} from "../../interfaces/router-data-interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  @Input() iconUrl: string = '';
  $pageInfoData:Observable<IRouterData> = new Observable<IRouterData>()

  constructor(private _pageInfoService: PageInfoDataService) {
    this.$pageInfoData = this._pageInfoService.$pageDataObservable;
  }
}
