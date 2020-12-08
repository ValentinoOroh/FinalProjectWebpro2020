/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from 'react'

export default class Indo extends Component {

    state={
        img: [
      
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_map_of_Indonesia.svg/1280px-Flag_map_of_Indonesia.svg.png",
            
        ]
    }


render() {
    const num=Math.floor(Math.random() * Math.floor(1));

    return (
        <div>
            <img src={this.state.img[num]} alt="header-image" width="870px" />
        </div>
        
    )
}
}