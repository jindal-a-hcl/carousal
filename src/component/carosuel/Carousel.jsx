import React, { Component } from 'react';
import {Fade, Slide, IconButton, Grid,Typography, Button, Backdrop } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import autoBind from 'auto-bind';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useSwipeable } from 'react-swipeable';
import Modal from '@material-ui/core/Modal';
import ReactBnbGallery from './../React-bnb-gallery/ReactBnbGallery';
import photos from './photos';


import CloseIcon from '@material-ui/icons/Close';
import './Example.scss';


const styles = {
    root: {
        position: "relative"
    },
    indicators: {
        marginTop: "-50px",
        position: "absolute",
        background: "#d7d8db",
        opacity: ".7",
        borderRadius: "20px",
        left:"40%"
    },    
    indicator: {
        //fontSize: "15px",
        padding: "0 4px",
        cursor: "pointer",
        transition: "200ms",
        //color: "#afafaf",
        '&:hover': {
            color: "#ffffff"
        },
        '&:active': {
            color: "#ffffff"
        }
    },
    active: {
        color: "#ffffff"
    },
    buttonWrapper: {
        position: "absolute",
        height: "100px",
        backgroundColor: "transparent",
        top: "calc(50% - 70px)",
        '&:hover': {
            '& $button': {
                backgroundColor: "black",
                filter: "brightness(120%)",
                opacity: 0.4
            }
        }
    },
    fullHeightHoverWrapper: {
        height: "calc(100% - 20px - 10px) !important",
        top: "0 !important"
    },
    button: {
        margin: "0 10px",
        position: "relative",
        backgroundColor: "#494949",
        top: "30px",
        color: "white",
        fontSize: "30px",
        transition: "200ms",
        cursor: "pointer",
        '&:hover': {
            opacity: "0.6 !important"
        }
    },
    fullHeightHoverButton: {
        top: "calc(50% - 20px) !important"
    },
    buttonVisible:{
        opacity: "0.6"
    },
    buttonHidden:{
        opacity: "0",
    },
    next: {
        right: 0
    },
    prev: {
        left: 0
    },
     paper: {
      position: "absolute",
      width: 400,
      backgroundColor: 'pink',
      border: "2px solid #000",
      padding: '5px',
      width: '100%',
      height: '70%'
    }
}

class Carousel extends Component
{
    constructor(props)
    {
        super(props);
        const strictIndexing = this.props.strictIndexing !== undefined ? props.strictIndexing : true;
        let startAt = this.props.startAt !== undefined ? props.startAt : 0;
        // if startAt is bigger than the children length, set it to be the last child (if strictIndexing)
        startAt = Array.isArray(this.props.children) ? (strictIndexing && startAt > this.props.children.length - 1 ? this.props.children.length - 1 : startAt) : 0

        this.state = {
            active: startAt,
            last: startAt,
            autoPlay: false,// this.props.autoPlay !== undefined ? this.props.autoPlay : true,
            interval: this.props.interval !== undefined ? this.props.interval : 4000,
            displayed: startAt,
            modalShow: false
        }
        const photos = [
        {
            photo: 'https://source.unsplash.com/aZjw7xI3QAA/1144x763',
            caption: 'Viñales, Pinar del Río, Cuba',
            subcaption: 'Photo by Simon Matzinger on Unsplash',
            thumbnail: 'https://source.unsplash.com/aZjw7xI3QAA/100x67',
        },
        {
            photo: 'https://source.unsplash.com/c77MgFOt7e0/1144x763',
            caption: 'La Habana, Cuba',
            subcaption: 'Photo by Gerardo Sanchez on Unsplash',
            thumbnail: 'https://source.unsplash.com/c77MgFOt7e0/100x67',
        },
        {
            photo: 'https://source.unsplash.com/QdBHnkBdu4g/1144x763',
            caption: 'Woman smoking a tobacco',
            subcaption: 'Photo by Hannah Cauhepe on Unsplash',
            thumbnail: 'https://source.unsplash.com/QdBHnkBdu4g/100x67',
        },
        {
            photo: 'https://source.unsplash.com/YIHRJrdgJqw/1144x763',
            caption: 'Malecon, La Habana, Cuba',
            subcaption: 'Photo by Emanuel Haas on Unsplash',
            thumbnail: 'https://source.unsplash.com/YIHRJrdgJqw/100x67',
        },
        {
            photo: 'https://source.unsplash.com/tC_SbXEhS5Y/1144x763',
            caption: 'Yellow car parked near painted concrete houses',
            subcaption: 'Photo by James Garman on Unsplash',
            thumbnail: 'https://source.unsplash.com/tC_SbXEhS5Y/100x67',
        },
        {
            photo: 'https://source.unsplash.com/h9Iq22JJlGk/1144x763',
            caption: 'Cuban brown coffee beans beside white ceramic mug',
            subcaption: 'Photo by Janko Ferlič on Unsplash',
            thumbnail: 'https://source.unsplash.com/h9Iq22JJlGk/100x67',
        },
        {
            photo: 'https://source.unsplash.com/6NT7jy6OU9I/1144x763',
            caption: 'Orange car on asphalt road',
            subcaption: 'Photo by Stéphan Valentin on Unsplash',
            thumbnail: 'https://source.unsplash.com/6NT7jy6OU9I/100x67',
        },
        {
            photo: 'https://source.unsplash.com/-vWmir7fGRM/1144x763',
            caption: 'Three assorted-colored vintage car on road in Havana',
            subcaption: 'Photo by Persnickety Prints on Unsplash',
            thumbnail: 'https://source.unsplash.com/-vWmir7fGRM/100x67',
        },
        {
            photo: 'https://source.unsplash.com/PubtV8UJxB8/1144x763',
            caption: 'Man walking on walkway while holding his bicycle',
            subcaption: 'Photo by Melanie Dretvic on Unsplash',
            thumbnail: 'https://source.unsplash.com/PubtV8UJxB8/100x67',
        },
        {
            photo: 'https://source.unsplash.com/fwtXC2sP7Tg/1144x763',
            caption: 'Blue \'Lada\' parked beside pink and green house',
            subcaption: 'Photo by Arno Smit on Unsplash',
            thumbnail: 'https://source.unsplash.com/fwtXC2sP7Tg/100x67',
        },
        {
            photo: 'https://source.unsplash.com/8AJN9q9Rxqw/1144x763',
            caption: 'Girl with a parrot',
            subcaption: 'Photo by Ricardo IV Tamayo on Unsplash',
            thumbnail: 'https://source.unsplash.com/8AJN9q9Rxqw/100x67',
        },
        {
            photo: 'https://source.unsplash.com/Q6LO0SCx3n0/1144x763',
            caption: 'Classic yellow car',
            subcaption: 'Photo by Flo P on Unsplash',
            thumbnail: 'https://source.unsplash.com/Q6LO0SCx3n0/100x67',
        },
        {
            photo: 'https://source.unsplash.com/kfxPVP_7P7U/1144x763',
            caption: 'Cuban boy pointing his finger',
            subcaption: 'Photo by Craig Philbrick on Unsplash',
            thumbnail: 'https://source.unsplash.com/kfxPVP_7P7U/100x67',
        },
        {
            photo: 'https://source.unsplash.com/kI00pEcN4bg/1144x763',
            caption: 'Man on a horse in Viñales, Cuba',
            subcaption: 'Photo by Flo P on Unsplash',
            thumbnail: 'https://source.unsplash.com/kI00pEcN4bg/100x67',
        }];
        this.timer = null;
        autoBind(this);
    }

    componentDidMount()
    {
        this.start();
    }
    componentWillUnmount()
    {
        this.stop();
    }

    static getDerivedStateFromProps(nextProps, prevState)
    {
        if (nextProps.autoPlay !== prevState.autoPlay || nextProps.interval !== prevState.interval)
        {
            return {
                autoPlay: nextProps.autoPlay !== undefined ? nextProps.autoPlay : false,
                interval: nextProps.interval !== undefined ? nextProps.interval : 4000
            }
        }

        else return null;
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevProps.autoPlay !== prevState.autoPlay || prevProps.interval !== prevState.interval)
        {
            this.reset();
        }
    }

    stop()
    {
        if (this.timer)
        {
            clearInterval(this.timer)
            this.timer = null;
        }
    }

    start()
    {
        if (this.state.autoPlay)
        {
            this.timer = setInterval(this.next, this.state.interval);
        }
    }

    reset()
    {
        this.stop();
        if (this.state.autoPlay)
        {
            this.start();
        }
    }

    pressIndicator(index)
    {
        this.setState({
            active: index,
            displayed: this.state.active
        });
        setTimeout(() => {
            this.setState({
                displayed: index
            })
        }, 200);
    }

    next(event)
    {
       
        const active = this.state.active,
              userNext = this.props.next !== undefined ? this.props.next : () => {};              
        let next = this.state.active + 1 > this.props && this.props.children && this.props.children.length - 1 ? 0 : this.state.active + 1;
  
        if(next === this.props.children.length) {next = 0;}
       
        this.setState({
            active: next,
            displayed: this.state.active
        })

        setTimeout(() => {
            this.setState({
                displayed: next
            }, () => userNext(next, active))
        }, 200);
        if (event)
            event.stopPropagation();
    }
     test () {
         this.setState({modalShow: true});
    }
    handleClose() {
        this.setState({modalShow: false});
    }
    

    prev(event)
    {
        const active = this.state.active;
        const prev = this.state.active - 1 < 0 ? this.props.children.length - 1 : this.state.active - 1;
       // const animation = this.props.animation !== undefined ? this.props.animation: "fade";
       // const timeout = this.props.timeout !== undefined ? this.props.timeout : (animation === "fade" ? 500 : 200);
        const userPrev = this.props.prev !== undefined ? this.props.prev : () => {};

        this.setState({
            active: prev,
            displayed: this.state.active
        }, this.reset)

        setTimeout(() => {
            this.setState({
                displayed: prev
            }, userPrev(prev, active))
        }, 200);

        if (event)
            event.stopPropagation();
    }

    render()
    {
        const indicators = this.props.indicators !== undefined ? this.props.indicators: true;
        const navButtonsAlwaysVisible = this.props.navButtonsAlwaysVisible !== undefined ? this.props.navButtonsAlwaysVisible: false;
       // const animation = this.props.animation !== undefined ? this.props.animation: "fade";
        //const timeout = this.props.timeout !== undefined ? this.props.timeout : (animation === "fade" ? 500 : 200);
        const fullHeightHover = this.props.fullHeightHover !== undefined ? this.props.fullHeightHover : true;

        const classes = this.props.classes;
        const buttonCssClassValue = `${classes.button} ${navButtonsAlwaysVisible? classes.buttonVisible: classes.buttonHidden } ${fullHeightHover ? classes.fullHeightHoverButton : ""}`;
        const buttonWrapperCssClassValue = `${classes.buttonWrapper} ${fullHeightHover ? classes.fullHeightHoverWrapper : ""}`;
        
        return (
            <div className={`${classes.root} ${this.props.className ? this.props.className : ""}`} onMouseEnter={this.stop} onMouseOut={this.reset}>
               <Modal className= {'modal'}
                    open={this.state.modalShow}
                     onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                <ReactBnbGallery photos = {photos} handleClose = {this.handleClose}/>
            </Modal>
            {   
                    Array.isArray(this.props.children) ? 
                        this.props.children.map( (child, index) => {
                            return (
                                <CarouselItem 
                                    key={`carousel-item${index}`}
                                    display={index === this.state.displayed ? true : false}
                                    active={index === this.state.active ? true : false}
                                    child={child}
                                    timeout={200}
                                    next={this.next}
                                    prev={this.prev}
                                    galleryShow ={this.test}
                                />
                            )
                        })
                        :
                        
                        <CarouselItem
                            key={`carousel-item0`}
                            display={true}
                            active={true}
                            child={this.props.children}
                            
                            timeout={200}
                            // next={this.next}
                            // prev={this.prev}
                        />
                }
                
                                
                <div className={`${buttonWrapperCssClassValue} ${classes.next}`}>
                    <IconButton className={`${buttonCssClassValue} ${classes.next}`} onClick={this.next} aria-label="Next">
                        <NavigateNextIcon/>
                    </IconButton>
                </div>

                <div className={`${buttonWrapperCssClassValue} ${classes.prev}`}>
                    <IconButton className={`${buttonCssClassValue}  ${classes.prev}`} onClick={this.prev} aria-label="Previous">
                        <NavigateBeforeIcon/>
                    </IconButton>
                </div>
                
                {indicators ? <Indicators classes={classes} length={this.props && this.props.children && this.props.children.length} active={this.state.active} press={this.pressIndicator}/> : null}
                
                { Array.isArray(this.props.children) ? 
                            this.props.children.map( (child, index) => {
                                debugger;
                                if(index === this.state.displayed) {
                                    return (
                                        <Typography>{child.props.children.props.item.caption}</Typography>
                                    )
                                }
                                
                                
                                
                            }):null}
                
            </div>
        )
    }
}

function CarouselItem(props)
{
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => props.next(),
        onSwipedRight: () => props.prev()
    })

    return (
        props.display ? (
            <div {...swipeHandlers} className="CarouselItem" onClick={props.galleryShow} >
                {
                    <Slide direction="left" in={props.active} timeout={props.timeout}>
                        <div>
                            {props.child}
                        </div>
                    </Slide>
                }
            </div>
        ) : null
    )
}

function Indicators(props)
{
    const classes = props.classes;

    let indicators = [];
    for (let i = 0; i < props.length; i++)
    {
        const className = i === props.active ? `${classes.indicator} ${classes.active}`: `${classes.indicator}`;
        const item = <FiberManualRecordIcon key={i} size='small' className={className} onClick={() => {props.press(i)}}/>;

        indicators.push(item);
    }

    return (
        <div className={`${classes.indicators}`}>
            <div>
                {indicators}
            </div>
        </div>
    )
}

export default withStyles(styles)(Carousel);
