export class UserService {
    users = [
        {
            id: 1,
            firstName: 'Franck',
            lastName: 'Devost'
        },
        {
            id: 2,
            firstName: 'Élise',
            lastName: 'Loiselle'
        },
        {
            id: 3,
            firstName: 'Michèle',
            lastName: 'Cloutier'
        },
    ];

    getUserById(id: number) {
        const user = this.users.find(
            (userObject) => {
                return userObject.id === id;
            }
        )
        return user;
    }

    editFirstNameOneUser(index: number, firstName: string) {
        this.users[index].firstName = firstName;
    }

    editLastNameOneUser(index: number, lastName: string) {
        this.users[index].lastName = lastName;
    }
}