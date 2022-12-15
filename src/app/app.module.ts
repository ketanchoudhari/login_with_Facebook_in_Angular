import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  SocialAuthServiceConfig,
  SocialAuthService
} from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("3455049884819409")
          }
        ],
        onError: (err) => {
          console.log(err);
        }
      } as SocialAuthServiceConfig
    },
    SocialAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
