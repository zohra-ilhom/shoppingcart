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
            searchLength: 0 ,
            testing: 'testing state',
            shuffle: 0,
            

           
        }

    }
    componentDidMount() {
        
        const url = 'http://api.giphy.com/v1/gifs/trending?api_key=3tgyczxyLIv8UwHGBqnT6qtZYHShOblR' 
        
        fetch(url)
            .then(response => response.json() )
            .then(json => { this.setState({items: json.data, searchLength: json.pagination.count}) })

        

    }

    

   
    handleSearch = (event) => {
        const userSearch= event.target.value
        //console.log(userSearch)
        this.setState({userSearch: userSearch})
        const url = 'http://api.giphy.com/v1/gifs/search?api_key=3tgyczxyLIv8UwHGBqnT6qtZYHShOblR&q='+ userSearch;
        
        if (userSearch.length >0) {
            fetch(url)
                .then(response => response.json() )
                .then(json => { this.setState({items: json.data, searchLength: json.pagination.count}) })
 
        }

        else {
            fetch('http://api.giphy.com/v1/gifs/trending?api_key=3tgyczxyLIv8UwHGBqnT6qtZYHShOblR')
                .then(response => response.json() )
                .then(json => { this.setState({items: json.data, searchLength: json.pagination.count}) });
            

        }


        
    }

    handleClick = () => {
        console.log('user clicked')
        const max = this.state.searchLength
    

        const random = Math.floor(Math.random() * max); 
        this.setState({shuffle: random})
    }


    render() { 
        const {items, searchLength} = this.state;
        // console.log(items)
        //const searchLength = this.state.items.length
        // console.log(searchLength)
        // this.setState({searchLength: searchLength})
        //const searchLength = this.state.searchLength

  
     

        return ( 
            <div>
                
                <h2>Find the Right Giphy For You</h2>
                <Searchbox handleInput={this.handleSearch} />
                <span>Results: {searchLength}</span>
      
           
                { items.length > 0 &&
                    <Giphycard 
                        url={items[this.state.shuffle].images.original.url}
                        title={items[this.state.shuffle].title}
                        
                        />

                }
                <button type="button" className="btn btn-primary m-2" onClick={this.handleClick}>Shuffle</button>
                
        
                
                
                
            
            </div>
         );
    }
}
 
export default Giphyfun;


