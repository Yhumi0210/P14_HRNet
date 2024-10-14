import { createSlice } from '@reduxjs/toolkit'
import employeesData from '../mock/employeesData.js'

/**
 *
 * @type {{data: *[]}}
 */
const initialState = {
    data: [],
}

/**
 *
 * @type {Slice<{data: *[]}, {initEmployees: *, addEmployee: *}, string, string, SliceSelectors<{data: *[]}>>}
 */
export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.data.push(action.payload)
        },
        initEmployees: (state) => {
            if (state.data.length === 0) {
                state.data = [...employeesData]
            }
        }
    },
})

export default employeeSlice.reducer

// Action creators are generated for each case reducer function
export const { addEmployee, initEmployees } = employeeSlice.actions