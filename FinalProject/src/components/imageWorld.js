import React, {Component} from 'react'

export default class World extends Component {

    state={
        img: [
            
            "https://www.insurance-canada.ca/wp-content/uploads/2020/04/airww_covid19__04012020_map_full.jpg",
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