import React, { useState, useEffect } from "react";
import {
    Link
} from "react-router-dom";

import { fakeUserData } from "../../api";

import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, clearAllUsers } from "../../store/slices/slice";
// import { MdDeleteForever } from "react-icons/all.js"
import "../../App.css"


const Home = () => {
    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.users
    })
    console.log(data)

    // payload ya data bol sakty ho
    const addNewUser = (name_data) => {
        // console.log('user home =>', name_data)
        dispatch(addUser(name_data))
    }
    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

    const deleteAllUser = () => {
        // dispatch(clearAllUsers())
        dispatch(clearAllUsers(data))
    }

    return (
        <div>
            <h1>User Data Home </h1>
            <div>
                <div>
                    <div>List of User Details</div>
                    <button onClick={() => addNewUser(fakeUserData())}>Add new User </button>
                    <button onClick={() => deleteAllUser()}>Delete All User </button>

                </div>
            </div>
            <table>
                <tr>
                    <th>Name</th>
                </tr>
                {data.map((v, i) => {
                    return (
                        <tr>
                            <td key={i}>{v} <button onClick={() => deleteUser(i)}>Delete User  </button></td>
                        </tr>
                    )
                })}

            </table>


            <br />
            <br />

            <Link to="/about">About us</Link>

        </div>
    )
}
export default Home