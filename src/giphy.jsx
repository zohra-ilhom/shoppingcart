import React, { Component } from 'react';
import Searchbox from './searchbox';
import Giphycard from './giphycard';
import 'bootstrap/dist/css/bootstrap.css';

class Giphyfun extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            userSearch: '',
            searchLength: '' ,
           
        }

    }
    componentWillMount() {
        
        const url = 'http://api.giphy.com/v1/gifs/trending?api_key=3' 
        
        fetch(url)
            .then(response => response.json() )
            .then(json => { this.setState({items: json.data}) });
            

    }

   
    handleSearch = (event) => {
        const userSearch= event.target.value
        //console.log(userSearch)
        this.setState({userSearch: userSearch})
        const url = 'http://api.giphy.com/v1/gifs/search?'+ userSearch;
        
        if (userSearch.length >0) {
            fetch(url)
                .then(response => response.json() )
                .then(json => { this.setState({items: json.data}) });
            
            
                
        }

        else {
            fetch('http://api.giphy.com/v1/gifs/trending?api_keyR')
                .then(response => response.json() )
                .then(json => { this.setState({items: json.data}) });
            

        }


        
    }


    render() { 
        var {items} = this.state;
     

        return ( 
            <div>
                
                <h2>Find the Right Giphy For You</h2>
                <Searchbox handleInput={this.handleSearch} />
           
                
                <ul> 
                    {items.map(item => <li key={item.id}><Giphycard 
                        url= {item.images.original.url}
                        heading= {item.title} /></li> 
                    )}
                    
                </ul>
                
                
                
            
            </div>
         );
    }
}
 
export default Giphyfun;


