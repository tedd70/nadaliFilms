import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})

export class ContactComponent implements OnInit {

  public isContactRoute: boolean = false;

  constructor (
    private router: Router,
    private contactActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.contactActivatedRoute.data.subscribe(data => {});

    const isContact = this.router.isActive('contact', true);
    if(isContact === true) {
      this.isContactRoute = true;
    } else {
      this.isContactRoute = false;
    }
  }
}