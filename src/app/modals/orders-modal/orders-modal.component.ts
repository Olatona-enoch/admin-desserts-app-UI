import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-orders-modal',
  templateUrl: './orders-modal.component.html',
  styleUrls: ['./orders-modal.component.css']
})
export class OrdersModalComponent {
  order: any = this.data.order;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {order: any},
  ){

  }
}
