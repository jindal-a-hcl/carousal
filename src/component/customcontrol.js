import React, {Component} from 'react';
import './counter.css';

class customcontrol extends  React.Component {
    render() {
        return (
            <div>
                <div className = "custom" onClick= {this.props.clicked} >
                {this.props.label} {this.props.children}</div>    

                           
            </div>
        )
    }
}
export default customcontrol;