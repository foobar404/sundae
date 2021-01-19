export const initialState = {

}

export function reducer(oldState,action,...args){
    let state = {...oldState}

    let actions = {}

    if(action === String(action))
        return actions[action](...args)
    else
        return action(state)
}