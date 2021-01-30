import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact, ContactService } from 'src/app/shared';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  contact: Contact = new Contact();
  isNewContact: boolean;
  contactId: number;
  get mobile() {
    return this.contactForm.get('mobile');
  }
  get email() {
    return this.contactForm.get('email');
  }
  constructor(private fb: FormBuilder, private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }
  contactForm: FormGroup;
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      landline: [''],
      website: [''],
      address: ['']
    });
    this.route.params.subscribe(params => {
      if (params.id) {
        this.contact = this.contactService.get(params.id);
        this.contactForm.patchValue({
          name: this.contact.name,
          email: this.contact.email,
          mobile: this.contact.mobile,
          landline: this.contact.landline,
          website: this.contact.website,
          address: this.contact.address
        });
        this.isNewContact = false;
        this.contactId = params.id;
      } else {
        this.isNewContact = true;
      }
    })
  }
  addNewContact() {
    if (this.isNewContact) {
      this.contactService.add(this.contactForm.value);
      let lastAddedContact = this.contactService.getAll().length - 1;
      this.router.navigateByUrl('/' + lastAddedContact);
    } else {
      this.contactService.update(this.contactId, this.contactForm.value);
      this.router.navigateByUrl('/' + this.contactId);
    }
  }
}