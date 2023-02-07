import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CooperativeAdmissionRoutingModule } from './cooperative-admission-routing.module';
import {CooperativeAdmissionComponent} from "./component/cooperative-admission.component";
import {SharedModule} from "../../../shared/shared.module";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [CooperativeAdmissionComponent],
  imports: [
    CommonModule,
    CooperativeAdmissionRoutingModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [CooperativeAdmissionComponent]
})
export class CooperativeAdmissionModule { }
