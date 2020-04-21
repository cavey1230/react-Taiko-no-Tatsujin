

const drum = [["Q","W","E","A","S","D","Z","X","C"],["Heater-1","Heater-2","Heater-3","Heater-4_1","Heater-6","Dsc_Oh","Kick_n_Hat","RP4_KICK_1","Cev_H2"]];

const audioReducer =(state=drum,action)=>{
    switch (action.type) {
        case "AUDIO":
            return [...state][1].concat(action.newAudio);
        default:
            return state
    }
};

const  actionAudio =(input) =>{
    return {
        type:"AUDIO",
        newAudio:input
    }

};
export {audioReducer,actionAudio}