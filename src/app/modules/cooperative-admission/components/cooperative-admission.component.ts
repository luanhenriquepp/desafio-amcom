import { Component } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {ActivatedRoute, Data} from "@angular/router";
import {CooperativeAdmissionService} from "../service/cooperative-admission.service";
import {ICooperative} from "../interface/cooperative.interface";
import {PageInfoDataService} from "../../../shared/services/page-info-data.service";
import {IRouterData} from "../../../shared/interfaces/router-data-interface";

@Component({
  selector: 'app-cooperative-admission',
  templateUrl: './cooperative-admission.component.html',
  styleUrls: ['./cooperative-admission.component.sass']
})
export class CooperativeAdmissionComponent {
  cpfCtrl: FormControl =  new FormControl('');
  cooperative: ICooperative = {} as ICooperative;
  findResult: boolean = false;
  searchSubmit: boolean = false;

  componentInfos: Data = {} as IRouterData;
  constructor(private _formBuilder: FormBuilder,
              private _service: CooperativeAdmissionService,
              private _pageInfoService: PageInfoDataService,
              protected route: ActivatedRoute) {
    this._pageInfoService.setPageInfo(this.route.snapshot.data as IRouterData)
  }


  searchCooperative() {
    this.searchSubmit = false;
    if(this.cpfCtrl.valid) {
      this._service.searchCooperative(this.cpfCtrl.value).subscribe({
        next: (resp:ICooperative[]) => {
          console.log(resp)
          this.searchSubmit = true;
          this.findResult  = !!resp.length;
          this.cooperative = resp[0];
        },
        error: (error) => {
          console.log(error)
        }
      })
    }

  }
}
