import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const headerImage1 = {
    backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/engagement-photos%2FMeg%2BJake-208-min.jpg?alt=media&token=c01a2cff-4b7f-4c55-8c2f-ce40eed3cf2f')"
}

const headerImage2 = {
    backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/engagement-photos%2FMeg%2BJake-217-min.jpg?alt=media&token=c8103911-e0f9-49d1-be6e-7b0017ead94c')"
}

const headerImage3 = {
    backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/engagement-photos%2FMeg%2BJake-32-min.jpg?alt=media&token=40ef61eb-aab3-4a6c-adb6-a365359524b9')"
}

const HeaderImage = () => {

    return (
        <div className="carousel-container">
            <Carousel interval={7000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/engagement-photos%2FMeg%2BJake-208-min.jpg?alt=media&token=c01a2cff-4b7f-4c55-8c2f-ce40eed3cf2f"
                        alt=""
                    />
                    {/* <div className="center-cropped" style={ headerImage1 }>
                    </div> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/engagement-photos%2FMeg%2BJake-217-min.jpg?alt=media&token=c8103911-e0f9-49d1-be6e-7b0017ead94c"
                        alt=""
                    />
                    {/* <div className="center-cropped" style={ headerImage2 }>
                    </div> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/engagement-photos%2FMeg%2BJake-32-min.jpg?alt=media&token=40ef61eb-aab3-4a6c-adb6-a365359524b9"
                        alt=""
                    />
                    {/* <div className="center-cropped" style={ headerImage3 }>
                    </div> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeaderImage