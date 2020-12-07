/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from 'react'

export default class World extends Component {

    state={
        img: [
            
            "http://pngimg.com/uploads/world_map/world_map_PNG11.png",
           ]
    }


render() {
    const num=Math.floor(Math.random() * Math.floor(1));

    return (
        <div>
            <img src={this.state.img[num]} alt="header-image" width="870px" height="319"/>
        </div>
        
    )
}
}