import React from 'react';

class ImageCard extends React.Component{

    constructor(props){
        super(props);

        this.Imageref=React.createRef();
    }

    componentDidMount(){
        this.Imageref.current.addEventListener('load',this.setSpans);
    }

    setSpans =()=>{
        console.log(this.Imageref.current.clientHeight);
    }

    render(){
        return(
            <img src={this.props.image.urls.regular} 
                 alt={this.props.image.description}
                 ref={this.Imageref}/>
        );
    }
}

export default ImageCard;