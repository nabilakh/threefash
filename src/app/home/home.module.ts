import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { DesignerComponent } from './designer/designer.component';

@NgModule({
  declarations: [
    HomeComponent,
    JumbotronComponent,
    AboutComponent,
    DesignerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class HomeModule { }
