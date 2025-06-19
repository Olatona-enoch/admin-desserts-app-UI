import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SalesComponent } from './pages/sales/sales.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { HelpAndSupportComponent } from './pages/help-and-support/help-and-support.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UnavailableComponent } from './pages/unavailable/unavailable.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { environment } from 'src/environments/environment';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainBodyComponent,
    DashboardComponent,
    OrdersComponent,
    CustomersComponent,
    SalesComponent,
    NotificationsComponent,
    HelpAndSupportComponent,
    SettingsComponent,
    UnavailableComponent,
    ProfileComponent,
    ProductListComponent,
    ProductsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
