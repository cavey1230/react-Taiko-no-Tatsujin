import React, {Component} from 'react';
import {LeftPad} from './component/leftPad'
import {RightPad} from './component/rightPad';
import "./css/App.css";

class App extends Component {

    render() {
        const this_audio = this.props.audio;
        const this_index = this.props.index;
        const this_actionIndex = this.props.myactions;
        console.log(this_audio, this_index);
        return (
            <div className="drmp_bg">
                <div className="center_con">
                    <LeftPad audio={this_audio} action={this_actionIndex}/>
                    <RightPad index={this_index} audio={this_audio}/>
                </div>
            </div>
        )
    }
};


export default App;
