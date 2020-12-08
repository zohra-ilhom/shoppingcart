import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Giphycard extends Component {
    state = { 
        imageUrl: this.props.url,
        heading: this.props.heading,
     }
    render() { 
        return ( 
            <div>
                <span >{this.state.heading}</span>
                <img src={this.state.imageUrl} width="200" height="200"/>

            </div>
         );
    }
}
 
export default Giphycard;