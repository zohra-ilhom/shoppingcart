import React, { Component } from 'react';
//import Navigation from './navigation';
import Counter from './counter';
import Searchbox from './searchbox';
import InputCounter from './inputcounter';
import Pagination from './pagination';
import {paginate} from './paginate';




class Counters extends Component {
    state = { 
        counters: [
            {name: 'zohra', value: 0, id: 2},
            {name: 'dekoti', value: 2, id: 3},
            {name: 'Perse', value: 4, id: 41},
            {name: 'blehbleh', value: 4, id: 42},
            {name: 'Pasting', value: 4, id: 43},
       
        ],
        searchCounters: '',
        filteredCounters: '',
        currentPage: 1,
        pageSize: 6,
    
     }


    addItem = () => {
        const inputz = document.getElementById('input').value
        let uniqueId = Date.now()
        this.setState(state =>({counters: this.state.counters.concat({name: inputz, value: 1, id: uniqueId})}));
        document.getElementById('input').value = '';
        
    }

    handleKeyPressed = (event) => {
        const inputz = document.getElementById('input').value
        let uniqueId = Date.now()
        if (event.key === "Enter" ? this.setState(state =>({counters: this.state.counters.concat({name: inputz, value: 1, id: uniqueId})})) : null);
        if (event.key === "Enter" ? document.getElementById('input').value = '': null);
        

    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(item => item.id !== counterId)
        this.setState({counters : counters})
    };

    stateStatus = () => {
        const length = this.state.counters.length;
        const totalCount = "Total of items in list = " + length;
        return this.state.counters.length === 0 ? 'List is empty, add an item' : totalCount;
        
    }

    handleIncrement = counter => {
        const value = counter.value++
        this.setState(counter => ({value : value}));
    }

     handleDecrement = counter => {
         const value = counter.value--
         this.setState(counter => ({value : value}));
     }

     handleReset = (counter) => {
        this.setState(this.state.counters.map(counter => counter.value = 0));
        
       
     }


     handleSearch = (event) => {
         
         console.log(event.target.value)
         this.setState({searchCounters : event.target.value})
         let filterCounters = this.state.counters.filter( counter => {return counter.name.toLowerCase().includes(this.state.searchCounters.toLowerCase())});
         this.setState({filteredCounters : filterCounters});
     }

     handlePageChange = (page) => {
        this.setState({currentPage : page})

     }


    render() { 
        let filterCounters = this.state.counters.filter( counter => {return counter.name.toLowerCase().includes(this.state.searchCounters.toLowerCase())});
        const counters = paginate(filterCounters, this.state.currentPage, this.state.pageSize);
        
        

        
        return (

            
        
            <div>
               
                
                <button onClick={this.handleReset} type="button" className="btn m-2 btn-primary">RESET</button>
                <p>{this.stateStatus()}</p>

                <InputCounter 
                    addItem={this.addItem} 
                    handleKeyPressed={this.handleKeyPressed}/>

                <br></br>

                <Searchbox handleInput={this.handleSearch}/>
       


                {counters.map(counter => <Counter 
                    onDelete={this.handleDelete} 
                    key={counter.id} 
                    id={counter.id} 
                    name={counter.name}
                    counter = {counter}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    value={counter.value} />)
                }

                <Pagination 
                    itemsCount = {filterCounters.length} 
                    pageSize = {this.state.pageSize} 
                    onPageChange={this.handlePageChange}
                    currentPage = {this.state.currentPage}
                />



                    
                    
            </div>   
            

        );
    
    }
}
 
export default Counters;