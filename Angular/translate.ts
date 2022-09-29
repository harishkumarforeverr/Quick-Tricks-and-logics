packages   
  "@ngx-translate/core": "^14.0.0",
  "@ngx-translate/http-loader": "^7.0.0",


in the module.ts file
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";


import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import {
  HttpBackend,
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
export function HttpLoaderFactory(handler: HttpBackend) {
  const http = new HttpClient(handler);

  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend],
      },
    }),
  ],

})


translate.ts file
{
  "name": {
    "label": "vrm project translate",
    "placeholder": "Enter Name"
  }, 
  "VrmModule": {
    "DashbordPage": {
      "pageTitle": "Alpha Health Care",
      "subPageTitle": "(Alpha healthcare.com)",
      "cards": {
        "TV": "Total Vendors",
        "CRR": "Critical Risk Rating",
        "HRR": "High Risk Rating",
        "RM": "Risk Meter",
        "MRR": "Moderate Risk Rating",
        "LRR": "Low Risk Rating"
      },
      "VRBC": "Vendor Risk By Catehory",
      "HRV": "High Risk Vendors with low performance score",
      "VBI": "Vendor by Indutory",
      "TRS": "Top Risk Areas",
      "table": {
        "title": "Top 10 ordered items from my vendors"
      }
    },
    "SideBar": {
      "Switch": {
        "myOrganiation": "My Organisation",
        "vendorMode": "Vendor Mode"
      },
      "Dashboard": "Dashboard",
      "SelfAssessment": "Self-Assessment",
      "VendorAssessment": "Vendor Assessment",
      "Questionaries": "Questionaries",
      "Reports": "Reports",
      "UserManagement": "User Management",
      "Remandiation": "Remandiation",
      "RiskProfile": "Risk Profile",
      "LogActivity": "Log Activity",
      "HelpSupport": "Help & Support"
    }
  },
  "VendorModules": {}
}







ts file
import { TranslateService } from "@ngx-translate/core";


  constructor( 
    public translate: TranslateService
  ) {
    translate.addLangs(["en", "de"]);
    translate.setDefaultLang("en");
  }


in html file
 <label>{{ "name.label" | translate }}</label>

in using ts file


import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-vrm",
  templateUrl: "./vrm.component.html",
  styleUrls: ["./vrm.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class VrmComponent implements OnInit {
  translatedObj;
  OrganisationsideBarData;
  RadioCheckData;
  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "de"]);
    translate.setDefaultLang("en");
    translate.get("VrmModule.SideBar").subscribe((text: string) => {
      this.translatedObj = text;
      console.log("texttexttext", text);
      this.OrganisationsideBarData = [
        {
          class: "Dashboard_sidebar_data",
          routerLink: "dashboard",
          routerLinkActive: "active",
          title: this.translatedObj.Dashboard,
        },
        {
          class: "Dashboard_sidebar_data",
          routerLinkActive: "active",
          routerLink: "self-assesment",
          title: this.translatedObj.SelfAssessment,
        },
        {
          class: "Dashboard_sidebar_data",
          routerLink: "vendors",
          routerLinkActive: "active",
          title: this.translatedObj.VendorAssessment,
        },
        {
          class: "Dashboard_sidebar_data",
          routerLink: "questionnaires",
          routerLinkActive: "active",
          title: this.translatedObj.Questionaries,
        },
        {
          class: "Dashboard_sidebar_data",
          routerLink: "reports",
          routerLinkActive: "active",
          title: this.translatedObj.Reports,
        },
        {
          class: "Dashboard_sidebar_data",
          routerLink: "user-management",
          routerLinkActive: "active",
          title: this.translatedObj.UserManagement,
        },
        {
          class: "Dashboard_sidebar_data",
          routerLinkActive: "active",
          routerLink: "remediation",
          title: this.translatedObj.Remandiation,
        },
        {
          class: "Dashboard_sidebar_data",
          routerLinkActive: "active",
          routerLink: "riskProfile",
          title: this.translatedObj.RiskProfile,
        },
        {
          class: "Dashboard_sidebar_data",
          routerLinkActive: "active",
          routerLink: "log-activity",
          title: this.translatedObj.LogActivity,
        },
        {
          class: "Dashboard_sidebar_data",
          routerLinkActive: "active",
          routerLink: "help-support",
          title: this.translatedObj.HelpSupport,
        },
      ];
      this.RadioCheckData = [
        {
          title: this.translatedObj.Switch.myOrganiation,
          titlePro: this.translatedObj.Switch.myOrganiation,
          enable: true,
          routerLink: "vrm/dashboard",
        },

        {
          title: this.translatedObj.Switch.vendorMode,
          titlePro: this.translatedObj.Switch.vendorMode,
          enable: false,
          routerLink: "vendor/dashboard",
        },
      ];
    });
  }

  ngOnInit(): void {}
}







