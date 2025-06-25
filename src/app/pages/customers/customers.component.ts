import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from 'src/app/services/customer.service';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];  // Customers after search + filter + sort
  fuse!: Fuse<Customer>;
  searchTerm: string = '';
  filter: false |'a-z' | 'z-a'| 'date-added' | 'status' = false         

  constructor(
    private customerService: CustomerService
  ){}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
      this.filteredCustomers = customers;
      this.setupFuse();
    })
  }

  setupFuse() {
    // Initialize Fuse.js with options (which fields to search, fuzziness level)
    const options: Fuse.IFuseOptions<Customer> = {
      keys: ['firstName', 'lastName', 'email', 'phone'],  // Fields to search
      threshold: 0.3                              // Lower = stricter match
    };
    this.fuse = new Fuse(this.customers, options);
  }

  applyFilter(event?: Event) {
    // Search using Fuse.js if searchTerm provided, otherwise use all customers
    let result: Customer[] = [];
    if (this.searchTerm) {
      const fuseResult = this.fuse.search(this.searchTerm);
      result = fuseResult.map(r => r.item);  // Extract matched customers
    } else {
      result = [...this.customers];          // No search → use all
    }

    // Filter by status if statusFilter set
    // if (filter = 'status') {
    //   result = result.filter(c => c.status === this.statusFilter);
    // }
    if (event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;

    if (value === 'a-z' || value === 'z-a') {
      console.log("sorting the names alphabetically");
      
      result.sort((a, b) => {
        const nameA = (a.firstName + ' ' + a.lastName).toLowerCase();
        const nameB = (b.firstName + ' ' + b.lastName).toLowerCase();

        if (value === 'a-z') {
          console.log("sorting the names alphabetically a-z");
          return nameA.localeCompare(nameB);
          
        } else {
          console.log("sorting the names alphabetically z-a");
          return nameB.localeCompare(nameA);
        }
      });
    }

    // Sort by date if sortByDate is true
    // if (this.sortByDate) {
    //   result.sort((a, b) => {
    //     return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    //   });
    // }

      
    }

    // Update displayed customers
    this.filteredCustomers = result;
  }
}

