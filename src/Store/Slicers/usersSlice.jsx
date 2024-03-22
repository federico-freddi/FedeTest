import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "usersSlice",
    initialState:{
        users: [],
        selectedUser:[],
    },
    reducers:{
        setUsers: (state, action) => {state.users = action.payload;},
        setSelectedUser: (state, action) => {state.selectedUser = action.payload;}
    },
})

export const {setUsers,setSelectedUser} = usersSlice.actions;
export default usersSlice.reducer;