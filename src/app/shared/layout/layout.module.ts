import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { CommitmentAuthorityComponent } from './leftnavbarcontent/commitment-authority/commitment-authority.component';
import { ProductivityComponent } from './leftnavbarcontent/productivity/productivity.component';
import { CommunicationsComponent } from './leftnavbarcontent/communications/communications.component';
import { CollaborationComponent } from './leftnavbarcontent/collaboration/collaboration.component';
import { NewsComponent } from './leftnavbarcontent/news/news.component';
import { ProjectsComponent } from './leftnavbarcontent/projects/projects.component';
import { AnalyticsComponent } from './leftnavbarcontent/analytics/analytics.component';
import { ApprovalsComponent } from './leftnavbarcontent/approvals/approvals.component';
// import { FooterComponent } from './footer/footer.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { SubheaderComponent } from './subheader/subheader.component';
// import { LayoutcontentComponent } from './layoutcontent/layoutcontent.component';
// import { LeftnavbarComponent } from './leftnavbar/leftnavbar.component';
// import { LeftnavbarcontentComponent } from './leftnavbarcontent/leftnavbarcontent.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LayoutComponent, HeaderComponent, CommitmentAuthorityComponent, ProductivityComponent, CommunicationsComponent, CollaborationComponent, NewsComponent, ProjectsComponent, AnalyticsComponent, ApprovalsComponent,
    // FooterComponent, SidebarComponent,
    // SubheaderComponent,
    // LeftnavbarComponent, LeftnavbarcontentComponent

  ],
})
export class LayoutModule { }
