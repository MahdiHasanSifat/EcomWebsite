import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { PoliciesComponent } from './policies/policies.component';
import { BottomBannerComponent } from './bottom-banner/bottom-banner.component';
import { InfoComponent } from './info/info.component';
import { FootComponent } from './foot/foot.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    TopBannerComponent,
    ProductListComponent,
    NewArrivalComponent,
    PoliciesComponent,
    BottomBannerComponent,
    InfoComponent,
    FootComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule
  ]
})
export class HomeModule { }
