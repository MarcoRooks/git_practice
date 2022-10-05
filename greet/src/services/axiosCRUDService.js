import axios from "axios";

/*login method:
@param {string} email
@param {string} password
logins are always with post
*/
export const login = (email, password) => {
    let body = {
        email: email,
        password: password
    }

    //returns response with a promise (consume with '.then()')
    return axios.post('https://reqres.in/api/login', body)
}

//To-do: Obtain all users
export const getAllUsers = () =>{
    return axios.get('https://reqres.in/api/users')
}
//To-do: Obtain all paged users- Users per page.
export const allPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

//To-do: obtain user by id
export const getSingleUser = (id) =>{
    return axios.get(`https://reqres.in/api/users/${id}`)
}

//To-do: Create user
export const createUser = (name, job) => {
    let body = {
        name: name,
        job: job
    }
    return axios.post('https://reqres.in/api/users', body)
}
//To-do: Update User
export const updateUser = (id, name, job) => {
    let body = {
        name: name,
        job: job
    }
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

//To-do: Delete user
export const deleteUser = (id) =>{
    return axios.delete(`https://reqres.in/api/users/${id}`)
}