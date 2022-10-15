import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'anand',
    profile: 'https://avatars.githubusercontent.com/u/10114717?v=4',
    age: 21,
    email: 'anand.pandit9112001@gmail.com',
    country: 'India',
    city: 'New Delhi',
    surname: 'Pandit',
    profession: 'Full Stack Developer',
    hobbies: ['Coding', 'Gaming', 'Watching Movies'],
    stack: ['React', 'Redux', 'Node', 'Express', 'MongoDB', 'Firebase']
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
        }
    }
})


export const { updateName } = userSlice.actions;

export default userSlice.reducer;