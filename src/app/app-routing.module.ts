import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { HomeComponent } from './contact/home/home.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'contactForm', component: ContactFormComponent },
      { path: 'update/:id', component: ContactFormComponent },
      { path: ':id', component: ContactDetailsComponent }
    ]
  },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
