import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubheaderComponent } from './subheader/subheader.component';
// import { LayoutcontentComponent } from './layoutcontent/layoutcontent.component';
import { LeftnavbarComponent } from './leftnavbar/leftnavbar.component';
import { LeftnavbarcontentComponent } from './leftnavbarcontent/leftnavbarcontent.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LayoutComponent, HeaderComponent,
    FooterComponent, SidebarComponent,
    SubheaderComponent,
    LeftnavbarComponent, LeftnavbarcontentComponent
  ],
})
export class LayoutModule { }
