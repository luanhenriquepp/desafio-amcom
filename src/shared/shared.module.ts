import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from "../app/core/core.module";
import {MenuComponent} from "./components/menu/menu.component";
import {HeaderComponent} from "./components/header/header.component";

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    CoreModule,
    MenuComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
