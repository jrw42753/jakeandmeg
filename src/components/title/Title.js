import React, { Component, useState } from 'react';

const Title = () => {

    return (
        <div>
            <div className="title-container"> 
                <div className="title-image"><img width="200" src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/flowers%2Farr_rose_purple8-min.png?alt=media&token=a344ccc2-9484-4823-b7de-8af6bdb8435b" /></div>
                <div className="title-text-container">
                    <p className="header-text header-text-desktop">Meg &#38; Jake</p>
                    {/* <div className="header-text header-text-mobile">
                        <span className="header-text-span">Meg</span>
                        <span className="header-text-span">&#38;</span>
                        <span className="header-text-span">Jake</span>
                    </div> */}
                    
                </div>
                <div className="title-image"><img src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/flowers%2Fimage%20(1)-min.png?alt=media&token=a3b8d118-5203-4014-9a27-09f38138af78" /></div>
                <div className="mobile-title-container">
                    <p className="header-text header-text-mobile">Meg &#38; Jake</p>
                    <div className="title-image-mobile">
                        <img src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/flowers%2Farr_rose_purple3-min.png?alt=media&token=3ba0d1b1-2776-4b65-b65b-86642c4b54b8" />
                    </div>
                </div>
            </div>
            <p className="header-text-date">August 26, 2023 &#8226; Omaha, NE</p>
        </div>
    )
}

export default Title