import { configureStore } from "@reduxjs/toolkit";
import React from 'react'
import todoSlice from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: todoSlice,
});