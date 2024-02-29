import Cookies from 'js-cookie'

export function putUserData(data) {
    console.log(data)
    Cookies.set('id', data.id)
    Cookies.set('first_name', data.first_name)
    Cookies.set('username', data.username)
    Cookies.set('email', data.email)

}
export function getUserData() {
    if (Object.values(Cookies.get()).length === 0) {
        return null
    } else {
        return Cookies.get()
    }

}

export function clearUserData() {
    Cookies.remove('token')
    Cookies.remove('id')
    Cookies.remove('username')
    Cookies.remove('email')
    Cookies.remove('first_name')
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