import { RouterModule,Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import exp from 'constants';

export const routes: Routes = [
    { path: 'page1', component: Page1Component }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppModule { }


