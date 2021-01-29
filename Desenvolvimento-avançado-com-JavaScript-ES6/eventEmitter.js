
const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
    }
}

const users = new Users();

users.once('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Matheus Morais'});
users.userLogged({ user: 'Matheus Th'});