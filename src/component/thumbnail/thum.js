
import React, {Component} from 'react';
import { connect } from 'react-redux';
class thum extends Component {
   constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
    this.imag = React.createRef();
  }
  
  imageClick = () => {
        console.log("gfgdfgdf",this);
    }

render() {
   

         return(
            <div>
                <img src="sample.png"  ref = {this.imag} onClick={this.imageClick} className = "test"/>
                
                <iframe width="940"ref = {this.iframeRef} className="test2" height="529" src="http://www.youtube.com/embed/rRoy6I4gKWU?autoplay=1" frameborder="0" allowfullscreen></iframe>
                
            </div>)
}

}
export default connect(null, null)(thum);