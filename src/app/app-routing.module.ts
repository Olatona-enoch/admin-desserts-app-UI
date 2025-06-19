import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SalesComponent } from './pages/sales/sales.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { HelpAndSupportComponent } from './pages/help-and-support/help-and-support.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'helpAndSupport', component: HelpAndSupportComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
