import React, {Component} from 'react';


class LeftPad extends Component {
    handleOnClick(id) {
        let myaudio = document.getElementById(id);
        myaudio.play();
    }

    render() {
        const url = "https://s3.amazonaws.com/freecodecamp/drums/",
            audio = this.props.audio;
        const left_item = () => {
            let itemArr = [];
            for (let i = 0; i < audio[0].length; i++) {
                itemArr.push(
                    <button key={"key_"+i} className="drum-machine" id={"drum_" + i} onClick={() => this.handleOnClick(audio[0][i])}>
                        {audio[0][i]}
                        <audio className="clip" id={audio[0][i]}>
                            Your browser does not support the <code>audio</code> element
                            <source src={url + audio[1][i] + ".mp3"} type="audio/mpeg"/>
                        </audio>
                    </button>
                )
            }
            return itemArr;
        };

        return (
            <div id="leftpad">
                {left_item()}
            </div>
        )
    }


}


export {LeftPad};
