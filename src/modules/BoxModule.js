const ON = 'ON',
      OFF = 'OFF'

export default function reducer(state={
        visibility: OFF
    }, action) {

    switch (action.type) {
        case ON: {
            return {
                ...state,
                visibility: action.visibility
            }
        }
        case OFF: {
            return {
                ...state,
                visibility: action.visibility
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
        visibility: true
    }
}

export function turnOff(){
    return {
        type: OFF,
        visibility: false
    }
}
