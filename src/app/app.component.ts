import { Component, OnInit } from "@angular/core";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import { SocialAuthService } from "@abacritt/angularx-social-login";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";

  public loggedIn!: Boolean;
  public user: any;

  constructor(private authService: SocialAuthService) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  ngOninit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }
  signIn() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
