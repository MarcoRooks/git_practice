import React, { useEffect, useState } from 'react';
import {getAllPagedUsers, getAllUsers, getUserDetails, login} from '../../../services/fetchService';

function FetchExamples() {

    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState(2)
    const [totalUsers, setTotalUsers] = useState(12)
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [selectedUser, setSelectedUser] = useState({})

    useEffect(() => {
        obtainUsers()
    }, [])

    const obtainUsers =() => {
        getAllUsers()
            .then((response) => {
                console.log('Response data: ',response.data)
                setUsers(response.data)
                setPages(response.total_pages)
                setTotalUsers(response.total)
                setUsersPerPage(response.per_page)
            })
            .catch ((error) => {
                alert(`THere has a been an error retreiving information: ${error}`)
            })
            .finally(()=>{
                console.log('Ended process')
                console.table(users)
            })
    } 

    const obtainPageUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                console.log('Response data: ',response.data)
                setUsers(response.data)
                setPages(response.total_pages)
                setTotalUsers(response.total)
                setUsersPerPage(response.per_page)
            }).catch ((error) => {
                alert(`THere has a been an error retreiving information: ${error}`)
            }).finally(()=>{
            console.log('Ended process')
            console.table(users)
        })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('Response data is:', response.data)
                setSelectedUser(response.data)
            })
            .catch((error)=>{
                alert("there is an error", error)
            })
            .finally(() => {
                console.log('finished retrieving info')
                console.table(selectedUser)
            })
    }

    const userLogin = () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                console.log('TOKEN GENERATED:', response.token)
                sessionStorage.setItem('Token',response.token)
            })
            .catch((error)=> {
                alert('Something went wrong', error)
            } )
            .finally(()=> {
                console.log('Ended login User:')
            })
    }

    

    return (
        <div>
            <button onClick={()=>userLogin()}>simulate login</button>
            <h2>Users:</h2>

            {users.map((user, index) =>(
                <p key={index} onClick={()=> obtainUserDetails(user.id)}>{user.first_name} {user.last_name}</p>
            ))
            }
            <p>Showing {usersPerPage} of a total of {totalUsers}</p>
            <button onClick={()=>obtainPageUsers(1)}>
                1
            </button>
            <button onClick={()=>obtainPageUsers(2)}>
                2
            </button>
            <div>
                    <h3>User Details</h3>
                    { selectedUser && <div>
                        <p>Name: {selectedUser.first_name}</p>
                        <p>Last name: {selectedUser.last_name} </p>
                        <p>Email: {selectedUser.email}</p>
                    </div>}
            </div>

        </div>
    );
}

export default FetchExamples;