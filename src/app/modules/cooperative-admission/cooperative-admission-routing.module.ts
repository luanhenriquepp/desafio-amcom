import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CooperativeAdmissionComponent} from "./components/cooperative-admission.component";

const routes: Routes = [
  {
    path: 'nova-admissao-cooperado',
    data: {
      title: 'NOVA ADMISSÃO COOPERADO',
      event: 'Cadastro / Admissão do cooperado / Nova admissão do cooperado',
      routePath: 'nova-admissao-cooperadoo'
    },
    children: [
      {
        path: '',
        component: CooperativeAdmissionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CooperativeAdmissionRoutingModule { }
