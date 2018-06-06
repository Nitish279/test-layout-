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
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { SubheaderComponent } from './shared/layout/subheader/subheader.component';
import { LeftnavbarComponent } from './shared/layout/leftnavbar/leftnavbar.component';
import { LeftnavbarcontentComponent } from './shared/layout/leftnavbarcontent/leftnavbarcontent.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ReportsComponent } from './reports/reports.component';



import { AnalyticsComponent } from './shared/layout/leftnavbarcontent/analytics/analytics.component';
import { ApprovalsComponent } from './shared/layout/leftnavbarcontent/approvals/approvals.component';
import { CollaborationComponent } from './shared/layout/leftnavbarcontent/collaboration/collaboration.component';
import { CommunicationsComponent } from './shared/layout/leftnavbarcontent/communications/communications.component';
import { NewsComponent } from './shared/layout/leftnavbarcontent/news/news.component';
import { CommitmentAuthorityComponent } from './shared/layout/leftnavbarcontent/commitment-authority/commitment-authority.component';
import { ProductivityComponent } from './shared/layout/leftnavbarcontent/productivity/productivity.component';
import { ProjectsComponent } from './shared/layout/leftnavbarcontent/projects/projects.component';

import { LeftnavbarNavitemComponent } from './shared/layout/leftnavbar/leftnavbar-navitem/leftnavbar-navitem.component';


// import { MonitoringComponent } from './monitoring/monitoring.component'


const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: MonitoringComponent
  },
  {
    path: 'monitoring',
    component: MonitoringComponent,
    data: {title: 'monitoring'},
    children: [
      {
        path: 'commitment-authority',
        component: CommitmentAuthorityComponent
      },
      {
        path: 'productivity',
        component: ProductivityComponent
      },
      {
        path: 'communications',
        component: CommunicationsComponent
      },
      {
        path: 'collaboration',
        component: CollaborationComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'analytics',
        component: AnalyticsComponent
      },
      {
        path: 'approvals',
        component: ApprovalsComponent
      }
    ]
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
  }
], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SubheaderComponent,
    LeftnavbarComponent,
    LeftnavbarcontentComponent,
    MonitoringComponent,
    TransactionsComponent,
    ReportsComponent,
    AnalyticsComponent,
    ApprovalsComponent,
    CollaborationComponent,
    CommunicationsComponent,
    NewsComponent,
    CommitmentAuthorityComponent,
    ProductivityComponent,
    ProjectsComponent,
    LeftnavbarNavitemComponent
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
