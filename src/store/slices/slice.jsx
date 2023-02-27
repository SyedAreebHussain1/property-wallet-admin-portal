import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
            // console.log('action.payload', action.payload)
        },
        removeUser(state, action) {
            // state.pop(action.payload)
            // console.log('hi id', action.payload)
            state.splice(action.payload, 1)
        },
        clearAllUsers(state, action) {
            // console.log('delete all', action.payload)

            // state.splice(0, action.payload.length)
            // return  state = []
            return []
        }
    },

    extraReducers(builder) {
        builder.addCase(userSlice.actions.clearAllUsers, () => {
            return []
        })
    }
})

console.log(userSlice.actions)
// console.log(userSlice)


export default userSlice.reducer
export const { addUser, removeUser, clearAllUsers } = userSlice.actions
