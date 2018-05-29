import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
// import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { SubheaderComponent } from './shared/layout/subheader/subheader.component';
import { LeftnavbarComponent } from './shared/layout/leftnavbar/leftnavbar.component';
import { LeftnavbarcontentComponent } from './shared/layout/leftnavbarcontent/leftnavbarcontent.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    // SidebarComponent,
    SubheaderComponent,
    LeftnavbarComponent,
    LeftnavbarcontentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    SharedModule,
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
