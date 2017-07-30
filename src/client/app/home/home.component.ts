import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../shared/billing/billing.service';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  payments: any[] = [];
  details: any = {};

  constructor(public paymentService: PaymentService) {}

  ngOnInit() {
    this.getPayments();
    this.getDetails();
  }

  getPayments() {
    this.paymentService.getPayments()
      .subscribe(
        payment => this.payments = payment,
        error => console.log(error),
        () => console.log(this.payments)
      );
  }

  getDetails() {
    this.paymentService.getDetails()
      .subscribe(
       detail => this.details = detail,
       error => console.log(error),
        () => console.log(this.details)
      );
  }

  unsubscribe(element) {
    if (this.details.serviceType === 'Free') {
      this.paymentService.reSubscibe()
        .subscribe(
          detail => this.details = detail,
          error => console.log(error),
          () => element.textContent = 'Cancel subscription'
        );
    } else {
      this.paymentService.unsubscribe()
        .subscribe(
          detail => this.details = detail,
          error => console.log(error),
          () => element.textContent = 'Start subscription'
        );
    }
  }
}
