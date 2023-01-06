import { LoginComponent } from './login/login.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './admin/menu/menu.component';
import { PrductCreateComponent } from './admin/prduct-create/prduct-create.component';
import { PrductEditComponent } from './admin/prduct-edit/prduct-edit.component';
import { PrductsComponent } from './admin/prducts/prducts.component';
import { MainComponent } from './main/main.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  // {
  //   path: 'newcourse',
  //   component: NewCourseFormComponent,
  // },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'product',
        component: PrductsComponent,
        //canActivate: [AuthguardGuard],
      },
      {
        path: 'product/create',
        component: PrductCreateComponent,
        //canActivate: [AuthguardGuard],
      },
      {
        path: 'product/:id/edit',
        component: PrductEditComponent,
       // canActivate: [AuthguardGuard],
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
