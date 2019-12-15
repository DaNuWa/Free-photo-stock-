import React, { Component } from 'react'

export class Imageload extends Component {
    constructor(props)
    {
      super(props);
      this.state={
       
      }
    }
    render() {
        console.log('oi ',this.props.images)
        const {images}=this.props
        let content=   images.map((img=>(
            <div className="responsive">
             <div className="gallery">
      <img id="myImg" src={img.largeImageURL} alt="Cinque Terre" width="600" height="400"/>
   <span>By </span><strong>{img.user}</strong>
  </div>
</div>                     
        )))
       return (
           <div>
                {content}
         </div>

        );
    }
}

export default Imageload;
