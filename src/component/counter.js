import React, {Component} from 'react';
import './counter.css';
import CustomControl from './customcontrol';
import { connect } from 'react-redux';
import Person from './Person/person';

class counter extends Component {
  render() {
         return(
            <div><div className="header">
                Counter :{this.props.counter}
            </div>
            <div >
                     <CustomControl label="Add" clicked = {this.props.onShow}>"dsfsfsdfs"</CustomControl>
                     <CustomControl label="subtract" clicked = {this.props.onDecrement}>"assas"</CustomControl>
           </div>
           <button onClick={this.props.onButtonResult}>Show Result</button> 
           <span>{this.props.results}</span>
           <Person />
           </div>
        );
  }
  
}

const mapStateToProps = state => {
   
    return {
        counter :state.re.ctr,
        results: state.re.results

    };
}

const mapDispatchToProps = dispatch => {
    return{
             onShow: () => dispatch({type: "onIncrement"}),
             onDecrement: () => dispatch({type: "onDecrement"}),
             onButtonResult: () => dispatch({type: "onButtonResult"})
    };
   
}

export default connect(mapStateToProps, mapDispatchToProps)(counter);
