import React, { useReducer } from 'react'
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
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        })
        setTimeout(() => dispatch( { type: REMOVE_ALERT }), 5000)
      }

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