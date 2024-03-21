export interface Pet {
    id: string,
    user: string,
    image_url: string,
    description: string,
    address: string,
    features: string,
    number: string
}
export interface User {
    id: string,
    first_name: string,
    username: string,
    password: string,
    email: string
}
export interface requestUser {
    username: string,
    password: string,
    email?: string,

}
export const defaultUser = {
    "id": '',
    "first_name": "",
    "username": "",
    "password": "",
    "email": ""
}
export const defaultPet = {
        "id": '',
        "user": '',
        "image_url": "",
        "description": "",
        "address": "",
        "features": "",
        "number": ""
}