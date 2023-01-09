import { AuthGuard } from './auth.guard';
import { AuthgodComponent } from './Login/authgod/authgod.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthuGodTestComponent } from './athu-god-test/athu-god-test.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "login" },
  { path: "login", component: AuthgodComponent },
  { path: "test", component: AthuGodTestComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
