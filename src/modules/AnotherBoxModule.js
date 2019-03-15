const ON = 'ON',
      OFF = 'OFF'

export default function reducer(state={
        another_visibility: OFF
    }, action) {

    switch (action.type) {
        case ON: {
            return {
                ...state,
                another_visibility: action.another_visibility
            }
        }
        case OFF: {
            return {
                ...state,
                another_visibility: action.another_visibility
            }
        }
        default:
            return state

    }
}

// ACTIONS
export function turnOn() {
    return {
        type: ON,
        another_visibility: true
    }
}

export function turnOff(){
    return {
        type: OFF,
        another_visibility: false
    }
}
