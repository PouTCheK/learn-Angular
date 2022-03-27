import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { AuthService } from './services/auth.service';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'ngx-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  authStatus: boolean | undefined;
  
  constructor(private authService: AuthService) {
    const firebaseConfig = {
      apiKey: "AIzaSyBA5PbdAIJgcI54a7gW7EVIfCKlznXKF6o",
      authDomain: "learn-angular-675e6.firebaseapp.com",
      databaseURL: "https://learn-angular-675e6-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "learn-angular-675e6",
      storageBucket: "learn-angular-675e6.appspot.com",
      messagingSenderId: "702487401236",
      appId: "1:702487401236:web:5c33211e43e36c0b986801"
    };
    initializeApp(firebaseConfig);
  }

  ngOnInit(): void {
    const auth = getAuth();
    onAuthStateChanged(auth,
      (user) => {
        if (user) {
          this.authStatus = true;
        } else {
          this.authStatus = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
  }
}
