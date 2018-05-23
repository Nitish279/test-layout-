export const defaultMenu : string= "monitoring";

export const menuItems : any = {
    "monitoring":{
        label: "Monitoring",
        RouterLink : ["monitoring"],
        visible : true,
        defaultMenu : "commitment",
        subMenu : {
            "commitment" : {
                label : "Commitment Authority",
                RouterLink : ["monitoring/commitment"],
                visible : true,
            },
            "arrears" : {
                label : "Cash Arrears",
                RouterLink : ["monitoring/arrears"],
                visible :true
            },
            "comprehensive" : {
                label : "Comprehensive",
                RouterLink :["monitoring/comprehensive"],
                visible : true
            },
            "contributions" : {
                label : "Contributions",
                RouterLink : ["monitoring/contributions"]
            }
        }
    },
    "reports" : {
        label : "Reports",
        RouterLink : ["reports"],
        visible : true,
        defaultMenu : "all reports",
        subMenu : {
            "all reports" : {
                label : "All Reports",
                RouterLink : ["reports/all reports"],
                visible : true
            },
            "status" : {
                label :"Status",
                RoterLink : ["reports/status"],
                visible :true
            },
            "MDRI" : {
                label : "MDRI",
                RouterLink : ["reports/MDRI"],
                visible : true
            },
            "commitment authority" : {
                label : "Commitment Authority",
                RouterLink : ["reports/commitment authority"],
                visible : true
            },
            "general" : {
                label : "general",
                RouterLink : ["reports/general"],
                visible : true
            }
        }
    },
    "transactions" : {
        label : "Transactions",
        RouterLink : ["transactions"],
        visible : true,
        defaultMenu : "All Transactions",
        subMenu : {
            "all transactions" : {
                label : "All Transactions",
                RouterLink : ["transactions/all transactions"],
                visible : true
            },
            "accounting" : {
                label : "Accounting",
                RouterLink : ["transactions/accounting"],
                visible : true
            },
            "commitment" : {
                label : "Commitment",
                RouterLink : ["transactions/commitment"],
                visible : true
            },
            "payment" : {
                label : "Payment",
                RouterLink : ["transactions/payment"],
                visible : true
            }
        }
    }
}

