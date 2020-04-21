const indexReducer =(state=-1,action)=>{
    switch (action.type) {
        case "INDEX":
            return state = action.newnum;
        default:
            return state;
    }
};

const  actionIndex =(input) =>{
    return {
        type:"INDEX",
        newnum:input
    }

};
export {indexReducer,actionIndex};