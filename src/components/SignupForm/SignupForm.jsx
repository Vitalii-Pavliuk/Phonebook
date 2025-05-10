import React, { useState } from "react";
// import style from "./LoginForm.module.css";

export const SignupForm = () => {
    return (
        <div>
        <form>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                required
            />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                required
            />
            </div>
            <div>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
            />
            </div>
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
    }