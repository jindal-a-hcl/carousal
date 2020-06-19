import React, {Component} from 'react';
import { connect } from 'react-redux';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "video-react/dist/video-react.css"; // import css;
import * as contentful from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from './../commonComponents/Button';
import { Player } from 'video-react';


class home extends Component {
   constructor(props) {
          super(props);
             
    }    

componentDidMount () {
      const client = contentful.createClient({
                    space: "yeb2kf84rl90",
                    accessToken: "GS4d9pecv5N6vCE7bEoG4sfg5oAuDXn8LBHBkZJx-kQ"
         });
         client.getEntries({content_type: 'modelWithAllField'}).then(entries => {
            entries.items.forEach(entry => {debugger;
                if(entry.fields) {
                    this.setState({
                        booleanValue: entry.fields.booleanField,
                        text: entry.fields.textFiled,
                        time: entry.fields.dateTimeField,
                        dropDown: entry.fields.dropDownList,
                        gender: entry.fields.gender,
                        richText:entry.fields.richTextField,
                        imageURL: entry.fields.imageField.fields.file.url,
                        width: entry.fields.imageField.fields.file.details.image.width,
                        height: entry.fields.imageField.fields.file.details.image.height,
                        date:entry.fields.dateTimeField,
                        pdfFile: entry.fields.pdfFileField.fields.file.url
                    })
                    
                }
            })
           let date = new Date(this.state.date);
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let dt = date.getDate();

            if (dt < 10) {
              dt = '0' + dt;
            }
            if (month < 10) {
              month = '0' + month;
            }

            this.setState({date: year+'-' + month + '-'+dt});
        })
         
        /*client.getEntries({content_type: 'formDataBySunitha'}).then((response) => {
            debugger;
            this.setState({articles:response.items[0].fields.id})
        })*/
   }


  render() {
    const imageClick = () => {
        debugger;
        var test = ' '
        return test;
    }

         return(
            <div><Button/>
             
                <header>
    <nav class="navbar navbar-expand-sm bg-blue navbar-dark fixed-top">
      <div class="col-6">
        <a class="navbar-brand" href="#"><img src="./assets/img/Logo.PNG" alt="PGE logo" class="img-fluid" /><span class="title">Good Morning</span></a>
      </div>
      <div class="col-6">
        <ul class="navbar-nav float-right">
          <li class="nav-item">
            <a class="nav-link" href="#">Search<i class="fas fa-search"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">jonathan.smith@gmail.com</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sign out</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">English</a>
          </li>
        </ul>
      </div>
    </nav>  
     
    <div class="main-navigation">
      <ul class="list-inline">
        <li class="list-inline-item"><a href="#">My Account</a></li>
        <li class="list-inline-item active"><a href="#">Residential</a></li>
        <li class="list-inline-item"><a href="#">Business</a></li>
        <li class="list-inline-item"><a href="#">Outages &amp; Safety</a></li>
        <li class="list-inline-item"><a href="#">Help Center</a></li>
        <li class="list-inline-item"><a href="#">Company</a></li>
      </ul>
    </div>
   
  </header>

    <main>
    <div class="video">
    <img src="sample.png" onClick={() => imageClick()} className = "test"/>
    <iframe width="940" height="529"className="test2" src="http://www.youtube.com/embed/rRoy6I4gKWU?autoplay=1" frameborder="0" allowfullscreen></iframe>
</div>
    <section class="banner">
      <div class="content  text-center">
        <img src={this.state && this.state.imageURL} height="300"
        width = "300"/>
      </div>
    </section>
    
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Residential</li>
        </ol>
      </nav>
    </div>
    
    <section>
      <div class="container">
        <header>
          <div>
            <h2 class="h4">We are here to help...</h2>
          
          </div>
          <div>
          <div>
          Date: {this.state && this.state.date}
          </div><Button/>
           Gender: 
            <input type="radio" name="gender" value="Male" checked = { this.state && this.state.gender === "Male"}/>Male 
            <input type="radio" name="gender" value="Female" checked = {this.state &&  this.state.gender === "Female"}/>Female 
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" class="form-control" id="firstName" placeholder="first Name"  value={this.state && this.state.text}/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">City</label>
              <select class="form-control" id="exampleFormControlSelect1"  value={this.state && this.state.dropDown} disabled>
                <option value={this.state && this.state.dropDown}>{this.state && this.state.dropDown}</option>
              </select>
            </div>
             <a href = {this.state && this.state.pdfFile} target = "_blank">Sample Pdf</a>
                       {documentToReactComponents(
                        this.state && this.state.richText)}
           
          </div>
        </header>

        <div class="row">
          <div class="col-lg-6 col-md-6">
            
            <div class="card">
              <img class="card-img-top" src="./assets/img/image-1.jpg" alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title h5">Billing &amp; Payment options</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a href="#">Link</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="card">
              <img class="card-img-top" src="./assets/img/image-2.jpg" alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title h5">Start, Stop or Move</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a href="#">Link</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
   
    <section class="section">
      <div class="container">
        <header>
          <div class="mb-0">
            <h2 class="h5">Future Thinking</h2>
          </div>
        </header>
        <div class="row">
          <div class="col-4 border-right">
            
            <span class="icon">
              <i class="fa fa-anchor fa-5x"></i>
            </span>
            <h3 class="h6">Power Choices</h3>
            <p class="small">We strive to embrace and drive change in our industry.</p>
            
          </div>
  
          <div class="col-4 border-right">
            
            <span class="icon">
              <i class="fab fa-500px fa-5x"></i>
            </span>
            <h3 class="h6">Energy Savings</h3>
            <p class="small">We strive to embrace and drive change in our industry.</p>
            
          </div>
  
          <div class="col-4">
            
            <span class="icon">
              <i class="fab fa-accessible-icon fa-5x"></i>
            </span>
            <h3 class="h6">Choose Renewable</h3>
            <p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            
          </div>
  
        </div>
      </div>
      
    </section>    
    
    <section class="section">
      <div class="content">
        <img src="./assets/img/evgeny.jpg" class="img-fluid" />
      </div>
    </section>
   
      <section class="bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              
              <div>
                <div class="d-inline-block"></div>
                <h2 class="h5 mb-2">Help</h2>
              </div>
             
  
              <div id="accordion" class="accordion accordion-color-primary" role="tablist" aria-multiselectable="true">
               
                <div class="card brd-none rounded mb-20">
                  <div id="accordion-heading-01" class="pa-0" role="tab">
                    <h5 class="h6 mb-0">
                        <a class="collapsed d-flex justify-content-between shadow color-main text-underline-none rounded px-30 py-20" href="#accordion-body-01" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="accordion-body-01">
                          Help Center
                          <span class="accordion-control-icon color-primary">
                            <i class="fa fa-angle-down"></i>
                            <i class="fa fa-angle-up"></i>
                          </span>
                        </a>
                      </h5>
                  </div>
                  <div id="accordion-body-01" class="collapse" role="tabpanel" aria-labelledby="accordion-heading-01" data-parent="#accordion">
                    <div class="color-gray-dark pa-30 medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                </div>
                
                <div class="card brd-none rounded mb-20">
                  <div id="accordion-heading-02" class="pa-0" role="tab">
                    <h5 class="h6 mb-0">
                        <a class="collapsed d-flex justify-content-between shadow color-main text-underline-none rounded px-30 py-20" href="#accordion-body-02" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="accordion-body-02">
                          Bill Payment Assistance
                          <span class="accordion-control-icon color-primary">
                            <i class="fa fa-angle-down"></i>
                            <i class="fa fa-angle-up"></i>
                          </span>
                        </a>
                      </h5>
                  </div>
                  <div id="accordion-body-02" class="collapse" role="tabpanel" aria-labelledby="accordion-heading-02" data-parent="#accordion">
                    <div class="color-gray-dark pa-30 medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                </div>
                
                <div class="card brd-none rounded mb-20">
                  <div id="accordion-heading-03" class="pa-0" role="tab">
                    <h5 class="h6 mb-0">
                        <a class="collapsed d-flex justify-content-between shadow color-main text-underline-none rounded px-30 py-20" href="#accordion-body-03" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="accordion-body-03">
                          Understanding My Bill
                          <span class="accordion-control-icon color-primary">
                            <i class="fa fa-angle-down"></i>
                            <i class="fa fa-angle-up"></i>
                          </span>
                        </a>
                      </h5>
                  </div>
                  <div id="accordion-body-03" class="collapse" role="tabpanel" aria-labelledby="accordion-heading-03" data-parent="#accordion">
                    <div class="color-gray-dark pa-30 medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                </div>
                
                <div class="card brd-none rounded mb-20">
                  <div id="accordion-heading-04" class="pa-0" role="tab">
                    <h5 class="h6 mb-0">
                        <a class="collapsed d-flex justify-content-between shadow color-main text-underline-none rounded px-30 py-20" href="#accordion-body-04" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="accordion-body-04">
                          Certified Contractors
                          <span class="accordion-control-icon color-primary">
                            <i class="fa fa-angle-down"></i>
                            <i class="fa fa-angle-up"></i>
                          </span>
                        </a>
                      </h5>
                  </div>
                  <div id="accordion-body-04" class="collapse" role="tabpanel" aria-labelledby="accordion-heading-04" data-parent="#accordion">
                    <div class="color-gray-dark pa-30 medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                </div>
                
                <div class="card brd-none rounded mb-20">
                  <div id="accordion-heading-05" class="pa-0" role="tab">
                    <h5 class="h6 mb-0">
                        <a class="collapsed d-flex justify-content-between shadow color-main text-underline-none rounded px-30 py-20" href="#accordion-body-05" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="accordion-body-05">
                          Certified Contractors
                          <span class="accordion-control-icon color-primary">
                            <i class="fa fa-angle-down"></i>
                            <i class="fa fa-angle-up"></i>
                          </span>
                        </a>
                      </h5>
                  </div>
                  <div id="accordion-body-05" class="collapse" role="tabpanel" aria-labelledby="accordion-heading-04" data-parent="#accordion">
                    <div class="color-gray-dark pa-30 medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>

   <footer class="bg-primary">
     <div class="container">
      
      <div class="row footer-navigation">
        <div class="col-8">
          <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Privacy</a></li>
            <li class="list-inline-item"><a href="#">|</a></li>
            <li class="list-inline-item"><a href="#">Legal</a></li>
            <li class="list-inline-item"><a href="#">|</a></li>
            <li class="list-inline-item"><a href="#">Sitemap</a></li>
          </ul>
        </div>
        <div class="col-md-4 align-self-center">
          <ul class="list-inline text-center text-md-right mb-0">
            <li class="list-inline-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li class="list-inline-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="list-inline-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Linkedin">
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            
            <li class="list-inline-item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
     </div>
   </footer>
           </div>
        );
  }
  
}
export default connect(null, null)(home);
