import React, {Component}  from 'react';
import AddPerson from './addPerson';
import './person.css';
import { connect } from 'react-redux';
import {add_person} from './../../store/action';
import axios from 'axios';
import Sample from './sampleComponent';
import * as contentful from 'contentful';
import {Button} from 'reactstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
 

class Person extends Component {
 
    constructor(props) {
          super(props);
             let article ;
          console.log("[person.js] printed");
          this.state = {
              showData: true
          };
    }
    
    
    static getDerivedStateFromProps(props,state) {
        console.log("[person.js] getDerivedStateFromProps", this);
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

   componentDidMount () {
      console.log('componentDidMount', this);
        
let sam = axios.get('https://jsonplaceholder.typicode.com/posts', )
                    .then(response =>{
                        console.log(response);
                    });
        const client = contentful.createClient({
                    space: "yeb2kf84rl90",
                    accessToken: "GS4d9pecv5N6vCE7bEoG4sfg5oAuDXn8LBHBkZJx-kQ"
         });
         client.getEntries({content_type: 'modelWithAllField'}).then(entries => {
            entries.items.forEach(entry => {
                if(entry.fields) {
                    this.setState({
                        booleanValue: entry.fields.booleanField,
                        text: entry.fields.textFiled,
                        time: entry.fields.dateTimeField,
                        dropDown: entry.fields.dropDownList,
                        gender: entry.fields.gender,
                        richText:entry.fields.richTextField
                    })
                    
                }
            })
        })
         
        /*client.getEntries({content_type: 'formDataBySunitha'}).then((response) => {
            debugger;
            this.setState({articles:response.items[0].fields.id})
        })*/
   }
   

   componentWillUnmount() {
       console.log('componentUnMount');
   }
   
  onAddPersonClick = (name,age) => {
    this.props.onAddPersonClick(name, age);
  }

    buttonHandle =(e) =>{
            this.setState({showData:false})
    }   

   render() {
       console.log('render()');
        
        
     
       return (
          <div>
          {this.state.articles}
       <div><Button />
          Gender: 
            <input type="radio" name="gender" value="Male" checked = {this.state.gender === "Male"}/>Male 
            <input type="radio" name="gender" value="Female" checked = {this.state.gender === "Female"}/>Female 
            <input type="text" id="fname" name="fname" value={this.state.text}/>
            <input type="text" id= "dropDown" value={this.state.dropDown} disabled/>
            {documentToReactComponents(
                        this.state.richText)}
         </div> 
          {this.state.showData ? 
           <div>
             <Sample data ={this.state.showData} onClick = {this.buttonHandle}></Sample>
           </div>: null
          }
            {this.state.showData ? 
             <AddPerson onAddPersonClick = {this.onAddPersonClick}/>: null}
              {this.props.persons && this.props.persons.map(person =>(
             <div className ='person'>
                {person.name}  {person.age}
                
             </div>
        ))}  
      
          </div>
       );
   }
}
const mapStateToProps = state => {
    return{
        persons : state.pr.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPersonClick: (name, age) => dispatch(add_person({name:name, age:age}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);