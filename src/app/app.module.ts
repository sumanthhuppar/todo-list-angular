import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
{path:'', component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'todolist',component:TodolistComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
