import React, { Component } from 'react';

class Searchbox extends Component {
    state = {  }
    render() { 
        return ( 
            <input onChange={this.props.handleInput} type="text" placeholder="search" />
         );
    }
}
 
export default Searchbox;