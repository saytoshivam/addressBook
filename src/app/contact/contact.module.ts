import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactListComponent } from './contact-list';
import { ContactFormComponent } from './contact-form';
import { HomeComponent } from './home';
import { ContactDetailsComponent } from './contact-details';

@NgModule({
  declarations: [ContactListComponent, ContactDetailsComponent, ContactFormComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ContactListComponent, ContactDetailsComponent, ContactFormComponent, HomeComponent
  ]
})
export class ContactModule { }
