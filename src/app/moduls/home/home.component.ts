import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer.service';
import { debounceTime, Subject } from 'rxjs';
import { AddusersvgComponent } from '../../svg/addusersvg/addusersvg.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { CustomerFormComponent } from '../../components/customer-form/customer-form.component';
import { UserlistsvgComponent } from '../../svg/userlistsvg/userlistsvg.component';
import { EditCustomerComponent } from '../../components/edit-customer/edit-customer.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AddusersvgComponent,
    ModalComponent,
    CustomerFormComponent,
    UserlistsvgComponent,
    EditCustomerComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  searchTerm = '';
  suggestions: any[] = [];
  customer: any = null;
  customerList: any[] = [];

  notFound = '';
  showAddCustomerModal = false;
  showCustomerList = false;
  editCustomerData: any = null;
  deleteCustomerId: number | null = null;
  showEditCustomerModal = false;
  showDeleteCustomerModal = false;

  searchChanged = new Subject<string>();

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private authService: AuthService
  ) {
    this.searchChanged.pipe(debounceTime(300)).subscribe((value) => {
      this.handleSearch(value);
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onInputChange() {
    this.searchChanged.next(this.searchTerm);
  }

  openAddCustomerModal() {
    this.showAddCustomerModal = true;
  }

  closeAddCustomerModal() {
    this.showAddCustomerModal = false;
  }

  onCustomerAdded(newCustomer: any) {
    this.customer = newCustomer;
    this.showAddCustomerModal = false;
    this.showCustomerList = false;

    this.closeAddCustomerModal();
  }
  handleSearch(value: string) {
    this.notFound = '';
    this.suggestions = [];
    this.customer = null;

    // If search is empty, don't search or show suggestions
    if (!value || value.trim() === '') return;

    const isNumber = /^\d+$/.test(value.trim());

    if (isNumber) {
      // It's a number → search by customer number
      this.customerService.searchByNumber(Number(value.trim())).subscribe({
        next: (res) => {
          this.customer = res;
          this.suggestions = []; // Clear suggestions if direct match found
        },
        error: () => {
          this.customer = null;
          this.notFound = 'No customer found';
        },
      });
    } else {
      // It's a name → search for matches
      this.customerService.searchByName(value.trim()).subscribe({
        next: (res) => {
          this.suggestions = res;
          if (res.length === 0) {
            this.notFound = 'No customer found';
          }
        },
        error: () => {
          this.suggestions = [];
          this.notFound = 'No customer found';
        },
      });
    }
  }

  loadAllCustomers() {
    this.showCustomerList = true;
    this.customer = null;
    this.suggestions = [];
    this.notFound = '';
    this.customerService.getAll().subscribe({
      next: (res) => {
        this.customerList = res;
      },
      error: () => {
        alert('Failed to load customer list.');
      },
    });
  }

  onCustomerClickFromList(cust: any) {
    this.customer = cust;
    this.showCustomerList = false;
  }

  selectCustomerFromList(cust: any) {
    this.customer = cust;
    this.searchTerm = '';
    this.notFound = '';
  }

  openEditModal() {
    if (this.customer?.id) {
      const formattedDOB = this.customer.dateOfBirth?.split('T')[0] || '';

      this.editCustomerData = {
        id: this.customer.id,
        customerName: this.customer.customerName,
        customerNumber: this.customer.customerNumber,
        dateOfBirth: formattedDOB,
        gender: this.customer.gender,
      };

      this.showEditCustomerModal = true;
    } else {
      alert('Cannot edit: Missing customer ID');
    }
  }

  onCustomerUpdated(updatedCustomer: any) {
    this.customer = updatedCustomer;
    this.closeEditCustomerModal();
  }

  closeEditCustomerModal() {
    this.showEditCustomerModal = false;
    this.editCustomerData = null;
  }

  openDeleteModal(customerId: number) {
    this.deleteCustomerId = customerId;
    this.showDeleteCustomerModal = true;
  }

  closeDeleteCustomerModal() {
    this.showDeleteCustomerModal = false;
    this.deleteCustomerId = null;
  }
}
