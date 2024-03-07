import { petsURL, loginURL, signupURL, userUrl } from "./urlContext";
import axios from "axios";

export const getUserById = async (id) => {
    try {
        const response = await axios.get(`${userUrl}/${id}/`)
        return response.data
    }
    catch (err) {
        throw new Error(err)
    }
}

export const getPetById = async (id) => {
    try {
        const response = await axios.get(`${petsURL}/${id}/`)
        return response.data
    } catch (err) {
        throw new Error(err.message)
    }
}

export const getPetsList = async () => {
    try {
        const response = await axios.get(petsURL)
        return response.data
    } catch(err) {
        throw new Error(err)
    }
}

export const signUp = async (data) => {
    try {
        const response = await axios.post(signupURL,data)
        return response.data
    } catch(err) {
        throw new Error(err)
    }
}

export const login = async (data) => {
    try {
        const response = await axios.post(loginURL, data)
        return response.data
    } catch(err) {
        throw new Error(err)
    }
    
}

export const deletePet = async(id) => {
    try {
        const response = await axios.delete(`${petsURL}/${id}/`)
        return response.data
    } catch(err) {
        throw new Error(err)
    }
}

export const patchUser = async(id,data) => {
    try {
        const response = await axios.patch(`${userUrl}/${id}/`,data)
        return response.data
    } catch(err) {
        throw new Error(err)
    }
}

export const patchPet = async(id,data) => {
    try {
        const response = await axios.patch(`${petsURL}/${id}/`,data)
        return response.data
    } catch(err) {
        throw new Error(err)
    }
}

export const postPet = async(data) => {
    try {
        const response = await axios.post(petsURL,data, {
            headers: {"Content-Type": "multipart/form-data",},})
        return response.data
    } catch(err) {
        throw new Error(err)
    }
}