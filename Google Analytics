https://www.npmjs.com/package/angular-ga



########################################################################### index.html file code ########################################################################### 
 <!-- Google tag (gtag.js) -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-251702622-1"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "UA-251702622-1");
    </script>



###########################################################################  in app.module.ts ########################################################################### 


import { GoogleAnalyticsModule, GA_TOKEN } from "angular-ga";
@NgModule({
  imports: [ 
    GoogleAnalyticsModule.forRoot(),
    ],
 providers: [
    { provide: GA_TOKEN, useValue: "UA-251702622-1" },
       ]
 });
 
 
 
 

 ###########################################################################  app.component.ts ########################################################################### 


import { GoogleAnalyticsService } from "angular-ga";



  constructor( 
    private gaService: GoogleAnalyticsService
  ) {
   
    this.gaService.configure("UA-251702622-1");
    ((that) => {
      document.addEventListener("click", function (eventarg) {
        setTimeout(() => {
          let event: any = eventarg || window.event;
          var target: any = event.target || event.srcElement;
          var text = target.textContent || target.innerText;

          const type = target.localName;
          if (type == "html") return;
          const location = event.view.location;
          const { pathname, href, origin } = location;
          const { appVersion, connection } = event.view.clientInformation;
          const str = `the user is currently in the ${pathname} path (router) and  user clicked on the ${text} and the type of the html tag is : ${type} and full url is ${href} and domain url is ${origin} and user browser info is : ${appVersion} and  user newtowk type is ${connection.effectiveType}`;
          console.log("GaEvent==>", str);
          that.gaService.event.emit({
            category: "click",
            action: str,
          });
        }, 10);
      });
    })(this);
  }
