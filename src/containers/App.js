import React, { Component } from 'react';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            SearchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    }

    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>Monsters Rolodex</h1>
                <SearchBox 
                    handleChange={e => this.setState({ SearchField: e.target.value }) } 
                    placeholder='search monsters'
                />
                <Scroll>
                    <CardsList robots={filterRobots}/>
                </Scroll>
            </div>
        )  
    }
};

export default App;