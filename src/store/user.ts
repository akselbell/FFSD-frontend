//creating user state, how program knows what user is?...
import { createSlice } from "@reduxjs/toolkit";
import { safeJSON } from "../util";

/**
 * @description user representation, can also have an error field which will be undefined if object is
 * valid user
 */
export type userT = {
    _id: string,
    username: string,
    email: string,
    email_valid: boolean,
    created_at: Date,
    error?: string
}

export type userStateT = {
    user: null | userT,
}

/**
 * @description fetches /api/me to see if user has valid session
 * @returns {Promise<userT | string>} value can either be a valid user, or a user accessable error message
 */
export const fetchMe = async (): Promise<userT | string> => {
    try {
        const user: userT = await fetch("/api/me").then(v => v.json());
        if (user.error) return user.error;
        
        return user;
    } catch (err) {
        console.error(err);
        return "Something went wrong";
    }
};

/**
 * @description logs in user with username and password
 * @param {string} username
 * @param {string} password
 * @returns {Promise<userT | string>} value can either be a valid user, or a user accessable error message
 */
export const login = async (username: string, password: string): Promise<userT | string> => {
    try {
        const user: userT = await fetch("/api/login", {   // hits the backend, fetches from localhost:80/api/login and passes that information
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        }).then(v => v.json());

        if(user.error) return user.error;

        return user;
    } catch(err) {
        console.error(err);
        return "something went wrong";
    }  
};

/**
 * @param {string} username 
 * @param {string} password 
 * @param {string} email 
 * @description signs user up for service
 * @returns {Promise<string | void>} error message if any occured
 */
export const signUp = async (username: string, password: string, email: string): Promise<string | void> => {
    try {
        const res: {error?: string} = await fetch("/api/signup", {   //hits the backend, fetches from localhost:80/api/login and passes that information
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password, email })
        }).then(v => v.json());
        
        return res.error;
    } catch (error: any) {
        console.error(error);
        return error;
    }
};

export const forgotPass = async (email: string) => {
    try {
        const res = await fetch("/api/forgot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        }).then(v => v.json());
        return res;
    } catch (error) {
        console.log(error);
        return "Something went wrong";
    }
};

export const resetPass = async (passwordToken: string, password: string) => {
    try {
        const res = await fetch("/api/reset", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ password_token: passwordToken, password })
        }).then(v => v.json());
        return res;
    } catch (error) {
        console.log(error);
        return "Something went wrong";
    }
};

export const userSlice = createSlice({
    name: "user_state",
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state: userStateT, action: {payload: userT, type: string}) => {
            if(action.payload.error)
                return;
            state.user = action.payload;
        },
        logout: (state: userStateT, _action: {payload: undefined, type: string}) =>{
            fetch("/api/signout", {method: "POST"});
            state.user = null;
        }
    }
});

export const { setUser, logout } = userSlice.actions;