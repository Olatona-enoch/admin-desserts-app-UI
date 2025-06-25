import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrdersModalComponent } from 'src/app/modals/orders-modal/orders-modal.component';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
 orders: any[] = []

  constructor(
    private orderService: OrderService,
    private dialog: MatDialog,
  ){}
  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data
    })
  }
  openDialog(order: any) {
      this.dialog.open(OrdersModalComponent, {
        maxWidth: '95vw',
        data: {
          order
        }
      });
    }
}
