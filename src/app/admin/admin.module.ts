import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { PrductsComponent } from './prducts/prducts.component';
import { PrductCreateComponent } from './prduct-create/prduct-create.component';
import { PrductEditComponent } from './prduct-edit/prduct-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    NavComponent,
    PrductsComponent,
    PrductCreateComponent,
    PrductEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
