import React, {Component}  from 'react';

class addPerson extends Component{
    state = {
        name: '',
        age:null
    };
    onNameChangeHandler = (event) => {
        this.setState({name: event.target.value});
    }
    onAgeChangeHandler  = (event) => {
        this.setState({age: event.target.value});
    }
 componentWillUnmount() {debugger;
       console.log('componentUnMount');
   }
    render() {
        console.log('addPerson');
        return(
            <div>
                <label>Name: </label>
                <input type = "text" onChange = {this.onNameChangeHandler} placeholder = "Name" value = {this.state.name}/>
                <label>Age: </label>
                <input type = "text" onChange = {this.onAgeChangeHandler} placeholder = "age" value = {this.state.age} />
                <button onClick = {( )=>this.props.onAddPersonClick(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }

}
export default addPerson;