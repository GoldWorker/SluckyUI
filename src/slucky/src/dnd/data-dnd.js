import fetch from 'isomorphic-fetch'
import { pushInQueue } from '../message/data-message.js'
import { addReducer } from '../store.js'
import { syncData } from './data-renderPage'

const config = {
    index: {
        temType: 'A',
        main: {
            color: '',
            com: ''
        },
        dec: {
            color: '',
            com: ''
        },
        bg: ''
    },
    article: {
        temType: 'A',
        main: {
            color: '',
            com: ''
        },
        bg: ''
    },
    pub: {
        nav: {
            color: '',
            com: ''
        }
    }
}

export const updateConf = (currentPage, comName, modName) => {
    return { type: 'UPDATE_COM_CONF', currentPage, comName, modName }
}

export const uploadConf = (conf) => {
    return (dispatch) => {
        dispatch(syncData(conf))
    }
    // return { type: 'SAVE_CONF', conf }
}

export const updateTemType = (page, temType) => {
    return { type: 'UPDATE_TEM_CONF', page, temType }
}

const receiveData=(conf)=>{
    return { type: 'RECEIVE_DND_CONF', conf }
}

export const fetchData = (conf) => {
    return (dispatch) => {
        fetch(__API__.comConf, {
            method: "GET",
            // credentials: 'include'
        }).then(data => data.json()).then(data => {
            console.log(data)
            if (data.error) {
                dispatch(pushInQueue({
                    info: "No Access",
                    flag: "hint"
                }))
            }
            dispatch(receiveData(data))
        }).catch(err => {
            console.log("error")
            dispatch(pushInQueue({
                info: "Place check your Internet",
                flag: "warning"
            }))
        })
    }
}

export const saveConf = (conf = {}) => {
    return (dispatch) => {
        fetch(__API__.comConfUpdate, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(conf)
        }).then(data => data.json()).then(data => {
            if (data.error) {
                dispatch(pushInQueue({
                    info: "No Access",
                    flag: "hint"
                }))
            } else {
                dispatch(pushInQueue({
                    info: "save config Success",
                    flag: "success"
                }))
            }
        }).catch(err => {
            dispatch(pushInQueue({
                info: "Internet Error",
                flag: "warning"
            }))
        })
    }
}

export const initConf = () => {
    return (dispatch) => {
        fetch(__API__.comConfUpdate, {
            method: "PUT",
            credentials: "include"
        }).then(data => data.json()).then(data => {
            if (data.error) {
                dispatch(pushInQueue({
                    info: "No Access",
                    flag: "hint"
                }))
            } else {
                dispatch(pushInQueue({
                    info: "init config Success",
                    flag: "success"
                }))
                dispatch(receiveData(data))
            }
        }).catch(err => {
            dispatch(pushInQueue({
                info: "Internet Error",
                flag: "warning"
            }))
        })
    }
}

export const dndReducer = (state = config, action) => {
    let _selfState = state
    console.log(action.type);
    switch (action.type) {
        case "RECEIVE_DND_CONF":
            return Object.assign({}, state, action.conf)

        case "UPDATE_TEM_CONF":
            const { page, temType } = action
            _selfState[page].temType = temType
            return Object.assign({}, state, _selfState)
        case "UPDATE_COM_CONF":
            const { currentPage, comName, modName } = action
            console.log(currentPage, comName, modName);
            // 判断公共组件
            if (_selfState[currentPage][modName]) {
                _selfState[currentPage][modName].com = comName
                return Object.assign({}, state, _selfState)
            } else if (_selfState.pub[modName]) {
                console.log(_selfState.pub[modName]);
                _selfState.pub[modName].com = comName
                return Object.assign({}, state, _selfState)
            } else return state

        case "UPDATE_PUBLIC_CONF":
            return Object.assign({}, state, { public: action.comConf })
        default:
            return state
    }
}

addReducer(dndReducer)