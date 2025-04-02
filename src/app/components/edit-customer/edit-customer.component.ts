import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-edit-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-customer.component.html',
})
export class EditCustomerComponent {
  @Input() customer: any;
  @Output() updated = new EventEmitter<any>();
  @Output() cancelled = new EventEmitter<void>();

  constructor(private customerService: CustomerService) {}

  submit() {
    if (!this.customer?.id) {
      alert('Missing customer ID');
      return;
    }

    this.customerService.update(this.customer.id, this.customer).subscribe({
      next: () => this.updated.emit(this.customer),
      error: (err) => alert('Update failed: ' + err.error),
    });
  }

  cancel() {
    this.cancelled.emit();
  }
}
