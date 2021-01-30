import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact, ContactService } from 'src/app/shared';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html'
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact;
  contactId: number;
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params && parseInt(params.id) < this.contactService.getAll().length) {
        this.contactId = params.id;
        this.contact = this.contactService.get(params.id);
      } else {
        this.router.navigateByUrl('/');
      }
    })
  }
  deleteContact(id: number) {
    this.contactService.delete(id);
    if (!this.contactService.getAll().length) {
      this.router.navigateByUrl('/');
    } else {
      this.contact = this.contactService.get(0);
      this.router.navigateByUrl('/' + 0);
    }
  }

}
