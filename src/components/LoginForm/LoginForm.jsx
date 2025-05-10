import React, { useState } from "react";
// import style from "./LoginForm.module.css";

export const LoginForm = () => {
    return (
        <div>
        <form>
            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        </div>
    );
}