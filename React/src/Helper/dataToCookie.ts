import Cookies from 'js-cookie'

//! get userID from cookies
export function getUserId() {
    if (Cookies.get('id')) {
        return Cookies.get('id')
    } else {
        return null
    }
}
//! set userID in cookies
export function setUserId(id:any) {
    Cookies.set('id',id)
}
//! clear userID in cookies
export function clearUserId() {
    Cookies.remove('id')
}

//! Data for login post request
/*{
    "token": "edcf4f3521b969be08e805ffc653eeff824e7ccc",
    "user": {
        "id": 2,
        "first_name": ""  //Default empty
        "username": "adam",
        "password": "pbkdf2_sha256$720000$ttDgy5f36sIjurRS9xkRl3$PQWi4ehaZYoZvuhVUTjqBIA9T85V6Lvmq31LGf9oJJY=",
        "email": "adam@mail.com"
    }
}*/