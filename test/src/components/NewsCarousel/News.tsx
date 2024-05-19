import React from 'react';
import './Carousel.css';
import img1 from '../../modules/MainPage/Components/Images/lolimg.png'
import img0 from '../../modules/MainPage/Components/Images/dotaimg.png'
import img2 from './Images/Rectangle 19 (1).png'
import img3 from './Images/Rectangle 20 (1).png'
import img4 from './Images/Rectangle 21 (1).png'
import Flickity from 'react-flickity-component';


let flickityOptions = {
    initialIndex: 1,
    freeScroll: true,
    wrapAround: true,
    autoPlay: 5000
}


const papers = {
  id: [1, 2, 3],
  tit: ['', '', ''],
  image: [img1, img0, img1]
}


export const News: React.FC = () => {
  return (
    <div>
    <Flickity 
      elementType="div"
      options={ flickityOptions }
      static
      reloadOnUpdate
    >
    {papers['id'].map((index) => {
            return (  
                <div key={index}>
                    <h2>
                      {papers['tit'][index - 1]}
                    </h2>
                    <div style={{
                      backgroundImage: `url(${papers['image'][index - 1]})`,
                      width: '900px',
                      height: '600px',
                      backgroundSize: 'cover'
                    }}></div>
                  </div>
              );
        }
    )}
    </Flickity>
    </div>
    );
}