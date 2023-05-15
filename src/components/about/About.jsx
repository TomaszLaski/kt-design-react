import React from 'react';
import NavigationBar from '../navbar/NavigationBar';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import dom from './../../assets/dom.jpg'
import './About.css'

const About = () => {
  const [open, setOpen] = React.useState(false);
  const gallery = [
    {id: 1 ,dom},
    {id: 2 ,dom},
    {id: 3 ,dom},
    {id: 4 ,dom},
    {id: 5 ,dom},
  ]
  const renderedImages = gallery.map((image) => {
    return <img className='entryImg' key={image.id} src={image.dom} onClick={() => setOpen(true)} />


  })
  return (
    <>
      <NavigationBar />
      <div className="container">
        <div className="row">
          <div className="col-lg-4" >
            {renderedImages}
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: dom },
          { src: dom },
          { src: dom },
        ]}
      />
    </>



  );
};

export default About;