//stores everything for the app, the state
import { configureStore } from "@reduxjs/toolkit";
import { fetchMe, setUser, userSlice } from "./store/user";

export const store = configureStore({               //store that holds the state
    reducer: {
        user_state: userSlice.reducer,
    }
});

fetchMe().then(v => {
    if(typeof v == "string") return console.log(v);
    store.dispatch(setUser(v));
});
