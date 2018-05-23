import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CommitmentComponent} from './commitment.component';
import {CashArrearsComponent} from './casharrears.component';
import {ComprehensiveComponent} from './comprehensive.component';
import {ContributionsComponent} from './contributions.component';
import {IocComponent} from './ioc.component';
import {LocationsComponent} from './locations.component';
import {OperationsComponent} from './operations.component';

const monitorRoutes: Routes = [{
    path: "",
    children: [{
        path: "",
        component: CommitmentComponent,
        data: { title: "Commitment Authority" }
    }, {
            path: "commitment",
            component: CommitmentComponent,
            data: { title: "Commitment Authority" }
        }, {
            path: "arrears",
            component: CashArrearsComponent,
            data: { title: "Cash Arrears" }
        }, {
            path: "comprehensive",
            component: ComprehensiveComponent,
            data: { title: "Comprehensive" }
        }, {
            path: "contributions",
            component: ContributionsComponent,
            data: { title: "Contributions" }
        }, {
            path: "ioc",
            component: IocComponent,
            data: { title: "IOC" }
        }, {
            path: "locations",
            component: LocationsComponent,
            data: { title: "Locations" }
        }, {
            path: "operations",
            component: OperationsComponent,
            data: { title: "IDA Operations" }
        }]
}];

@NgModule({

    imports : [
               CommonModule,
               FormsModule,
               ReactiveFormsModule,
               RouterModule.forChild(monitorRoutes),
            ],

    declarations : [
                    CommitmentComponent,
                    CashArrearsComponent,
                    ComprehensiveComponent,
                    ContributionsComponent,
                    IocComponent,
                    LocationsComponent,
                    OperationsComponent
                    ],
    exports :   [
                    CommitmentComponent,
                    CashArrearsComponent,
                    ComprehensiveComponent,
                    ContributionsComponent,
                    IocComponent,
                    LocationsComponent,
                    OperationsComponent
                    ],
    
    providers : []
  
})
export class MonitorModule{

}