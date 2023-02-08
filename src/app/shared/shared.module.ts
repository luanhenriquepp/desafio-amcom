import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./components/menu/menu.component";
import {HeaderComponent} from "./components/header/header.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { ButtonComponent } from './components/button/button.component';
import {MatButtonModule} from "@angular/material/button";
import {NgxMaskDirective, provideNgxMask} from "ngx-mask";
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    NgxMaskDirective

  ],
  exports: [
    CoreModule,
    MenuComponent,
    HeaderComponent,
    ReactiveFormsModule,
    ButtonComponent,
    NgxMaskDirective
  ],
  providers: [
    provideNgxMask()
  ]
})
export class SharedModule { }
