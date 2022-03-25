import { Subject } from "rxjs";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    userSubject = new Subject<boolean>();
    isAuth = false;

    signIn() {
        this.isAuth = true;
        this.emitUserAuth();
    }

    signOut() {
        this.isAuth = false;
        this.emitUserAuth();
    }

    emitUserAuth() {
        this.userSubject.next(this.isAuth);
    }

    constructor() {}

    createNewUser(email: string, password: string) {
        const auth = getAuth();
        return new Promise<void>(
            (resolve, reject) => {
                createUserWithEmailAndPassword(auth, email, password).then(
                    () => {
                        resolve();
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    signInUser(email: string, password: string) {
        const auth = getAuth();
        return new Promise<void>(
            (resolve, reject) => {
                signInWithEmailAndPassword(auth, email, password).then(
                    () => {
                        resolve();
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    signOutUser() {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("Disconnected")
        }).catch((error) => {
            console.log(error);
        });
    }
}