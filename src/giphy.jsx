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
            testing: 'testing state',
            

           
        }

    }
    componentDidMount() {
        
        const url = 'http://api.giphy.com/v1/gifs/trending?api_key=3tgyczxyLIv8UwHGBqnT6qtZYHShOblR' 
        
        fetch(url)
            .then(response => response.json() )
            .then(json => { this.setState({items: json.data}) })

        console.log(this.state.items);
        
            

    }

   
    handleSearch = (event) => {
        const userSearch= event.target.value
        //console.log(userSearch)
        this.setState({userSearch: userSearch})
        const url = 'http://api.giphy.com/v1/gifs/search?api_key=3tgyczxyLIv8UwHGBqnT6qtZYHShOblR&q='+ userSearch;
        
        if (userSearch.length >0) {
            fetch(url)
                .then(response => response.json() )
                .then(json => { this.setState({items: json.data}) });
            
            
                
        }

        else {
            fetch('http://api.giphy.com/v1/gifs/trending?api_key=3tgyczxyLIv8UwHGBqnT6qtZYHShOblR')
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
           
                { items.length > 0 &&
                    <Giphycard url={items[0].images.original.url}/>
                }
                
        
                
                
                
            
            </div>
         );
    }
}
 
export default Giphyfun;


