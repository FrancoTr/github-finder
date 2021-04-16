import React, { useReducer } from 'react'
import axios from 'axios'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const AlertState = props => {
    const initialState = null //instead of declaring state as an object with "alert: null", I just leave it like this

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    // Set Alert

    return <AlertContext.Provider
        value={{
            alert: state,
            setAlert
        }}
    >
        {props.children}
    </AlertContext.Provider>
}

export default AlertState