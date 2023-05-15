import React from 'react';
import NavigationBar from '../navbar/NavigationBar';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import dom from './../../assets/dom.jpg'
import './About.css'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  const [open, setOpen] = React.useState(false);
  const gallery = [
    { id: 1, dom },
    { id: 2, dom },
    { id: 3, dom },
    { id: 4, dom },
    { id: 5, dom },
  ]
  const renderedImages = gallery.map((image) => {
    return <Col xs={6} md={4} lg={3}>
      <img className='entryImg' key={image.id} src={image.dom} onClick={() => setOpen(true)} />
    </Col>
    
  });
  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          {renderedImages}
        </Row>
      </Container>



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