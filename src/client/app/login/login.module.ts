/**
 * Created by piia.orav on 16.08.2017.
 */
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentService } from '../shared/billing/billing.service';


@NgModule({
  imports: [SharedModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [PaymentService]
})
export class LoginModule { }
