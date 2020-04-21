import React, {Component} from 'react';

class RightPad extends Component {

    render() {
        const audio = this.props.audio;
        const index = this.props.index;
        return (
            <div id="rightpad">
                <img
                    src="https://img.zcool.cn/community/015f60581f1f89a84a0e282bbe8d15.png@3000w_1l_2o_100sh.png"
                    id="rightimg"
                    alt="err"/>
                <h1>老刘的大鼓</h1>
                <p>{(index > -1) ? audio[1][index] : "click button"}</p>
            </div>
        )
    }
}


export {RightPad};
