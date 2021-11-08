import { BehaviorSubject } from 'rxjs';
import { fetchWrapper } from 'helpers/fetch-wrappers';

const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    register,
};



function register(user) {
    console.log("USER SERVICE REGISTER")
    return fetchWrapper.post("/api/v1/register", user); // see next.config for full path
}

