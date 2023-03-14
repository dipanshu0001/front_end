export const intialstate = {
    user: null,
    playlist: [],
    playing: null,
    item: null,
    token:null,
    discover:[]
}
const reducer = (state, action) => {
    // console.log(action);
    //action->type,[payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return{
                ...state,
                playlist:action.playlist

            }
        case 'SET_DISCOVERY':
            return{
                ...state,
                discover:action.discover
            }
        default:
            return state
    }
}
export default reducer;