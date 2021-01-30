import { Injectable } from '@angular/core';

import { Contact } from '.';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = Array<Contact>();
  constructor() { }
  get(id: number) {
    return this.contacts[id];
  }

  getId(contact: Contact) {
    return this.contacts.indexOf(contact);
  }

  add(contact: Contact) {
    let newLength = this.contacts.push(contact);
    return newLength - 1;
  }

  update(id: number, updated: Contact) {
    let contact = this.contacts[id];
    contact.name = updated.name;
    contact.email = updated.email;
    contact.mobile = updated.mobile;
    contact.landline = updated.landline;
    contact.website = updated.website;
    contact.address = updated.address;
  }
  delete(id: number) {
    this.contacts.splice(id, 1);
  }
  getAll() {
    return this.contacts;
  }
}
