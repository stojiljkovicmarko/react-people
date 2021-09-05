class UserService {
    url = "https://randomuser.me/api/?results=15";

    fetchAll() {
        return fetch(this.url)
            .then(response => response.json())
            // .then(rawUsers => rawUsers.map(u => new User(u)));
    }
}

export const userService = new UserService();