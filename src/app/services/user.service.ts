import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "../models/User.model";
import { getDatabase, ref, set, onValue } from "firebase/database";

@Injectable()
export class UserService {
    private users: User[] = [];
    userSubject = new Subject<User[]>();

    constructor(private httpClient: HttpClient) {}

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    saveUserToServer() {
        const database = getDatabase();
        const db = getDatabase();
        set(ref(db, '/users'), this.users);
    }

    getUsersFromServer() {
        const database = getDatabase();
        return new Promise<User[]>(
            (resolve, reject) => {
                onValue(ref(database, '/users'), (snapshot) => {
                    this.users = snapshot.val() ? snapshot.val() : [];
                    resolve(this.users);
                });
            }
        );
    }

    getSingleUserFromServer(id: number) {
        const database = getDatabase();
        return new Promise<User>(
            (resolve, reject) => {
                onValue(ref(database, '/users/' + id), (snapshot) => {
                    const firstname = (snapshot.val() && snapshot.val().firstName) || '';
                    const lastname = (snapshot.val() && snapshot.val().lastName) || '';
                    const email = (snapshot.val() && snapshot.val().email) || '';
                    const position = (snapshot.val() && snapshot.val().position) || '';
                    resolve(new User(firstname, lastname, email, position));
                }, {
                    onlyOnce: true
                });
            }
        );
    }

    createNewUser(user: User) {
        this.users.push(user);
        this.saveUserToServer();
        this.emitUsers();
    }

    removeUser(user: User) {
        const userIndexToRemove = this.users.findIndex(
            (userElement) => {
                if (userElement === user) {
                    return true;
                } else {
                    return false;
                }
            }
        );
        this.users.splice(userIndexToRemove, 1);
        this.saveUserToServer();
        this.emitUsers();
    }
}