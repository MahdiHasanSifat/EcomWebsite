import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { DescriptionComponent } from './description/description.component';
import { FrameComponent } from './frame/frame.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { TestcardComponent } from './testcard/testcard.component';
import { JustcardModule } from 'src/app/shared/components/justcard/justcard.module';
import { QuestionComponent } from './question/question.component';
import { BottomcoverComponent } from './bottomcover/bottomcover.component';
import { NewsletterssComponent } from './newsletterss/newsletterss.component';
import { FootComponent } from '../home/foot/foot.component';
import { FoottComponent } from './foott/foott.component';


@NgModule({
  declarations: [
    AboutComponent,
    TopBannerComponent,
    DescriptionComponent,
    FrameComponent,
    TestcardComponent,
    QuestionComponent,
    BottomcoverComponent,
    NewsletterssComponent,
    FoottComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    NavbarModule,
    JustcardModule,
  ]
})
export class AboutModule { }
