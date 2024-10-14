import { configureStore } from '@reduxjs/toolkit'
import employeeSliceReducer from '../features/employeeSlice.js'

/**
 * store is the Redux store for the application.
 * @type {import('redux').Store}
 */
export const store = configureStore({
    reducer: {
        employee: employeeSliceReducer
    },
})