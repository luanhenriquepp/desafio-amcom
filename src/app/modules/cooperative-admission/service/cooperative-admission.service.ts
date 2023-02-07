import { Injectable } from '@angular/core';
import {ICooperative} from "../interface/cooperative.interface";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CooperativeAdmissionService {


  data: ICooperative[] = [
    {
      name: 'Jussiscleide Da Silva',
      cpf: '04316712144',
      cpfIsRegularized: true,
      accounts: [
        {
          accountNumber: '123132-x',
          title: 'Conta aplicação',
          subTitle: 'Cooperativa Viacredi'
        },
        {
          accountNumber: '89745-2',
          title: 'Conta corrente',
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
