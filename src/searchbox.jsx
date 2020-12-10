import React, { Component } from 'react';

class Searchbox extends Component {
    state = {  }
    render() { 
        return ( 
            <form class="form-inline">
                <input onChange={this.props.handleInput} className="form-control" type="search" placeholder="Search" aria-label="Search" />
            </form>
            
         );
    }
}
 
export default Searchbox;