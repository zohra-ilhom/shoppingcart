import React, { Component } from 'react';
import Counter from './counter';
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
            {name: 'TEsting', value: 4, id: 44},
            {name: 'Pasting', value: 4, id: 47},
            {name: 'Pasting', value: 4, id: 48},
            {name: 'Pasting', value: 4, id: 49},
        ],
        pageSize: 3,
        currentPage: 1,
    

     }

    addItem = () => {
        const inputz = document.getElementById('input').value
        console.log(inputz);
        this.setState(state =>({counters: this.state.counters.concat({name: inputz, value: 1, id: 5})}));
    
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

     filterItem = () => {
         const inpu = document.getElementById('inputFilter').value
         const counters = this.state.counters.filter(counter => counter.name.includes(inpu))
         this.setState({counters: counters})
         console.log(counters)
         
     }

     handlePageChange = (page) => {
         this.setState({currentPage : page})
     }
   


    render() { 
        
        const counters = paginate(this.state.counters, this.state.currentPage, this.state.pageSize);
        console.log(counters)

        
        
        return (
        
            <div>
                
                <button onClick={this.handleReset} type="button" className="btn m-2 btn-primary">RESET</button>
                <p>{this.stateStatus()}</p>
                <input id="input" type="text" placeholder="add item to list" className="m-2"></input>
                <button onClick={this.addItem}  type="button" className="btn m-2 btn-dark">Add</button>

                <br></br>

                <input id="inputFilter" type="text" placeholder="Search" className="m-2"></input>
                <button onClick={this.filterItem}  type="button" className="btn m-2 btn-dark">Filter</button>


                {counters.map(counter => <Counter 
                    onDelete={this.handleDelete} 
                    key={counter.id} 
                    id={counter.id} 
                    name={counter.name}
                    counter = {counter}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    value={counter.value} />)}

                <Pagination 
                    itemsCount = {this.state.counters.length} 
                    pageSize = {this.state.pageSize} 
                    onPageChange={this.handlePageChange}
                    currentPage = {this.state.currentPage}
    
                />

                    
                    
            </div>   
            

        );
    
    }
}
 
export default Counters;