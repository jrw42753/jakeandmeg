import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const headerImage1 = {
    backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/engagement-photos%2FIMG_0007.jpg?alt=media&token=7eb33df9-3162-4cb8-80e1-5b3b5e17b250')"
}

const headerImage2 = {
    backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/engagement-photos%2FIMG_0004.jpg?alt=media&token=35f2d6cb-804a-4f08-a413-2e9a1fbb7e15')"
}

const headerImage3 = {
    backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/engagement-photos%2FIMG_0006.jpg?alt=media&token=f87798c4-ccb1-449a-a7db-2165c4aad255')"
}

const HeaderImage = () => {

    return (
        <div className="carousel-container">
            <Carousel interval={7000}>
                <Carousel.Item>
                    <div className="center-cropped" style={ headerImage1 }>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="center-cropped" style={ headerImage2 }>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="center-cropped" style={ headerImage3 }>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeaderImage