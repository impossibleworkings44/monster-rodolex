import './App.css';
import React ,{Component} from 'react';
import {CardList} from './components/cardlist/card-list-component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component
{
  constructor(){
    super();

    this.state={
   monsters:[],
   searchField:''
  }

 // this.handleChange=this.handleChange.bind(this);
 /*
  used to bind this from component to the userdefined fn 
  no need for this if we use arrow fn for user defined fn
*/
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>this.setState({monsters:users}));
}

  handleChange=(e)=>{
    
    this.setState({searchField:e.target.value});

  }

  render()
  {
    const {monsters,searchField}=this.state;
    const filteredMonster=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className="App">
        <h1> Monsters Rodolex </h1>
        <SearchBox
           placeholder="search monster" 
           handleChange={this.handleChange}/>

        <CardList monsters={filteredMonster}/>

    </div>
    )
  }
}

export default App;
