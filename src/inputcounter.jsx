import React, { Component } from 'react';

class InputCounter extends Component {

    render() { 
        return ( 
            <div>
                <input onKeyPress={this.props.handleKeyPressed} id="input" type="text" placeholder="add item to list" className="m-2"></input>
                <button onClick={this.props.addItem} type="button" className="btn m-2 btn-dark">Add</button>
            </div>
         );
    }
}
 
export default InputCounter;