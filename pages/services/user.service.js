import { BehaviorSubject } from 'rxjs';
import { fetchWrapper } from 'helpers/fetch-wrappers';

const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));
export const userService = {
    // user: userSubject.asObservable(),
    userData: {},
    get userValue () { return userSubject.value },
    register,
    login,
    setUserValue,
    isSessionActive,
    setUserSignOut,
};
function setUserValue(obj) { userService.userData = obj }
function isSessionActive() { return JSON.stringify(userService.userData) !== '{}' }
function setUserSignOut() { userService.userData = {} }

function login(username, password) {
    return fetchWrapper.post(`/api/v1/login`, { username, password });
        // .then(user => {
            // publish user to subscribers and store in local storage to stay logged in between page refreshes
            // userSubject.next(user);
            // localStorage.setItem('user', JSON.stringify(user));
            // localStorage.setItem('user', JSON.stringify(response));

            // return user;
        // });
}


function register(user) {
    console.log("USER SERVICE REGISTER")
    return fetchWrapper.post("/api/v1/register", user); // see next.config for full path
}

