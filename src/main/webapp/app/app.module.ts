import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CarsellsSharedModule } from 'app/shared/shared.module';
import { CarsellsCoreModule } from 'app/core/core.module';
import { CarsellsAppRoutingModule } from './app-routing.module';
import { CarsellsHomeModule } from './home/home.module';
import { CarsellsEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CarsellsSharedModule,
    CarsellsCoreModule,
    CarsellsHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CarsellsEntityModule,
    CarsellsAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class CarsellsAppModule {}
