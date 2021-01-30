import { Component, OnInit } from '@angular/core';

import { Contact, ContactService } from 'src/app/shared';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = new Array<Contact>();
  constructor(private contactService: ContactService) { }
  ngOnInit(): void {
    this.contacts = this.contactService.getAll();
  }

}
