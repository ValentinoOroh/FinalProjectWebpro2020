import React, {Component} from 'react'
import { render } from '@testing-library/react'
export default class Indo extends Component {

    state={
        img: [
            
            "https://www.touropia.com/gfx/b/2019/08/indonesia.png",
            
        ]
    }


render() {
    const num=Math.floor(Math.random() * Math.floor(1));

    return (
        <div>
            <img src={this.state.img[num]} alt="header-image"/>
        </div>
        
    )
}
}