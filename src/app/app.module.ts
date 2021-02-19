import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { NavbarComponent } from './components/Shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MaskDirective } from './directives/mask.directives';
import { DataService } from './services/data.services';
import { AuthService } from './services/auth.services';
import { CheckoutPageComponent } from './pages/store/checkout-page/checkout-page.component';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';




@NgModule({
  declarations: [
    MaskDirective,
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    PetsPageComponent,
    ProductsPageComponent,
    CartPageComponent,
    FramePageComponent,
    ProductCardComponent,
    LoadingComponent,
    CheckoutPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
