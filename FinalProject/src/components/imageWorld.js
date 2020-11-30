import React, {Component} from 'react'
import { render } from '@testing-library/react'
export default class World extends Component {

    state={
        img: [
            
            "https://e7.pngegg.com/pngimages/80/607/png-clipart-world-map-cartography-world-map-miscellaneous-world.png"
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