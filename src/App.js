import React, {Component} from 'react';
import {LeftPad} from './component/leftPad';
import "./css/App.css";

class App extends Component {

    render() {
        const this_audio = this.props.audio;
        console.log(this_audio);
        return (
            <div className="drmp_bg">
                <div className="center_con">
                    <LeftPad audio={this_audio} />
                </div>
            </div>
        )
    }
};


export default App;
