import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Customer {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  uid: string;
}


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private firestore: Firestore
  ) { }

  getCustomers(){
    const customersRef = collection(this.firestore, 'users');
    return collectionData(customersRef) as Observable<Customer[ ]>;
  }
}
