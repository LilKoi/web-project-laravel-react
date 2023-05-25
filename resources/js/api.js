import axios from "axios"


export const Api = {

    headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt"))?.token}`
    },

    register: async function (name, login, password) {
        const response = await axios.request({
            method: "POST",
            url: `/api/register`,
            headers: this.headers,
            params: {
                "name": name,
                "login": login,
                "password": password
            }
        })

        return await response
    },
    login: async function (login, password) {
        const response = await axios.request({
            method: "POST",
            url: `/api/login`,
            headers: this.headers,
            params: {
                "login": login,
                "password": password
            }
        })
        return await response
    },
    CreateRoom: async function (name) {
        const response = await axios.request({
            method: "POST",
            url: `/api/createRoom`,
            headers: this.headers,
            params: {
                "name": name,
            }
        })
        return await response
    },
    getRooms: async function () {
        const response = await axios.request({
            method: "GET",
            url: `/api/getRooms`,
            headers: this.headers,
        })
        return await response
    },
    getMessanges: async function (idRooms) {
        const response = await axios.request({
            method: "POST",
            url: `/api/getMessanges/${idRooms}`,
            headers: this.headers,
        })
        return await response
    },
    sendMessange: async function (idRoom, text) {
        localStorage.getItem("jwt")
        const id = JSON.parse(localStorage.getItem("user")).id
        const response = await axios.request({
            method: "POST",
            url: `/api/sendMessage`,
            headers: this.headers,
            params: {
                "room_id": idRoom,
                "user_id": id,
                "text": text
            }
        })
        return await response
    }
}