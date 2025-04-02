import { Component, EventEmitter, Output } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css',
})
export class CustomerFormComponent {
  customer = {
    CustomerName: '',
    CustomerNumber: '',
    DateOfBirth: '',
    Gender: '',
  };

  @Output() customerCreated = new EventEmitter();

  constructor(private customerService: CustomerService) {}

  submit() {
    console.log('Submitting customer:', this.customer);
    this.customerService
      .add({
        CustomerName: this.customer.CustomerName,
        CustomerNumber: this.customer.CustomerNumber,
        DateOfBirth: this.customer.DateOfBirth,
        Gender: this.customer.Gender,
      })
      .subscribe({
        next: (res) => {
          this.customerCreated.emit(res);
        },
        error: (err) => {
          alert('Failed to add customer: ' + err.error);
        },
      });
  }
}
