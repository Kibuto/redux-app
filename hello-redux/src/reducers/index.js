export default (state, action) => {
    switch (action.type) {
        case "SET_TECHNOLOGY": {
            console.log("action: ", action.text);
            return {
                ...state,
                tech: action.text
            };
        }
       default:
           return state;
    }
}