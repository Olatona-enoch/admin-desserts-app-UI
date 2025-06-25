import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private firestore: Firestore
  ) { }

    getOrders(): Observable<any[]> {
      const ordersRef = collection(this.firestore, 'orders');
      return collectionData(ordersRef) as Observable<any[]>;
    }
  
}
