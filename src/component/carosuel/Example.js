import React from 'react';
import Carousel from "./Carousel";
import autoBind from "auto-bind"
import './Example.scss';
import photos from './photos';

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
    Checkbox,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormLabel,
    Slider
} from '@material-ui/core';

function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left",
            totalItems = 1,
            mediaLength = 1;
    let items1 = [];

    for (let i = 0; i < mediaLength; i++) {
        const item = props.item,
              media = (
                    <Grid item xs={12 / totalItems} key={item &&item.Name}>
                        <CardMedia
                            className="Media"
                            image={item &&item.photo}
                            title={item &&item.subcaption}
                        >
                           
                        </CardMedia>
                         {/*<Typography className="MediaCaption">
                                {item &&item.caption}
                            </Typography>*/}

                    </Grid>
            );     
        items1.push(media);
    }
debugger;
    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items1}
            </Grid>
           cvbcvbv
        </Card>
    )
}

const items = [{
        Items: [{
                Name: "Macbook Pro",
                Image: "https://source.unsplash.com/featured/?macbook"
        }]
        },{
            Items: [{
                    Name: "Washing Machine WX9102",
                    Image: "https://source.unsplash.com/featured/?washingmachine"
        }]
        },{
            Items: [{
                    Name: "Living Room Lamp",
                    Image: "https://source.unsplash.com/featured/?lamp"
                }]
        }]

class BannerExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            autoPlay: false,
            timer: 500,
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: false
        }
        autoBind(this);
    }

    toggleAutoPlay() {
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    toggleIndicators() {
        this.setState({
            indicators: !this.state.indicators
        })
    }

    toggleNavButtonsAlwaysVisible()
    {
        this.setState({
            navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
        })
    }

    changeAnimation(event) {
        this.setState({
            animation: event.target.value
        })
    }

    changeTimeout(event, value) {
        this.setState({
            timeout: value
        })
    }

    render() {
        return (
            <div style={{marginTop: "50px", color: "#494949"}}>
                <Carousel
                    className="Example"
                    autoPlay={this.state.autoPlay}
                    timer={this.state.timer}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={true}>
                    {
                        photos.map((item, index) => {
                            return <div> 
                            <Banner item={item} key={index} contentPosition={item.contentPosition}/>                           
                            </div>
                        })
                     }
                </Carousel>
            </div>
        )
    }
}

export default BannerExample;
