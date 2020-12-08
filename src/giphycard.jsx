import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Giphycard extends Component {

    render() { 
        return ( 
            <div>
                
                <img src={this.props.url} width="200" height="200"/>

            </div>
         );
    }
}
 
export default Giphycard;