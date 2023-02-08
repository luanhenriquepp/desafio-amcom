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
      name: 'Astolfo Júnior da Silva',
      cpf: '78945631296',
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
      name: 'Romualdo da Silva',
      cpf: '23165478311',
      cpfIsRegularized: false,
      accounts: [
        {
          accountNumber: '654465-0',
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
