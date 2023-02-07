import { Injectable } from '@angular/core';
import {ICooperative} from "../interface/cooperative.interface";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CooperativeAdmissionService {


  data: ICooperative[] = [
    {
      name: 'Luan',
      cpf: '04316712144',
      cpfIsRegularized: true,
      accounts: [
        {
          accountNumber: '1234',
          title: 'Conta aplicação',
          subTitle: 'Cooperativa Viacredi'
        },
        {
          accountNumber: '12345',
          title: 'Conta aplicação',
          subTitle: 'Cooperativa Viacredi'
        }
      ]
    },
    {
      name: 'Beltrano de Tal',
      cpf: '23165478311',
      cpfIsRegularized: true,
      accounts: [
        {
          accountNumber: '654465',
          title: 'Conta aplicação',
          subTitle: 'Cooperativa Viacredi'
        },
        {
          accountNumber: '885432',
          title: 'Conta aplicação',
          subTitle: 'Cooperativa Viacredi'
        }
      ]
    }
  ]
  constructor() { }

  searchCooperative(cpf: string): Observable<ICooperative[]> {
    return of(this.data.filter(item => item.cpf === cpf));
  }
}
