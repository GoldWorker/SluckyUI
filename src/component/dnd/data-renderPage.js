import fetch from 'isomorphic-fetch'
import { pushInQueue } from '../message/data-message.js'
import { addReducer } from '../store.js'

const config = {
    index: {
        temType: 'A',
        main: {
            color: '',
            com: 'article'
        },
        dec: {
            color: '',
            com: 'todoList'
        },
        bg: ''
    },
    article: {
        temType: 'A',
        main: {
            color: '',
            com: 'todoList'
        },
        bg: ''
    },
    pub: {
        nav: {
            color: '',
            com: 'nav'
        }
    }
}

export const syncData = (conf) => {
    return { type: 'SYNC_DATA', conf }
}

export const getConf = (conf) => {
    conf = config;
    return { type: 'RECEIVE_CONF_LIST', conf }
}

export const renderReducer = (state = config, action) => {
    let _selfState = state
    console.log(action.type);
    switch (action.type) {
        case "RECEIVE_CONF_LIST":
            return Object.assign({}, state, action.conf)
        case "SYNC_DATA":
            return Object.assign({}, state, action.conf)
        default:
            return state
    }
}

addReducer(renderReducer)