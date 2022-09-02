import React, { Component, useState } from 'react';

const Title = () => {

    return (
        <div className="title-container"> 
            <div className="title-image"><img width="200" src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/flowers%2Farr_rose_purple8-min.png?alt=media&token=a344ccc2-9484-4823-b7de-8af6bdb8435b" /></div>
            <div className="title-text-container">
                <p className="header-text">Meg & Jake</p>
                <p>August 26, 2023 &#8226; Omaha, NE</p>
            </div>
            <div className="title-image"><img width="200" src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/flowers%2Fimage%20(1)-min.png?alt=media&token=a3b8d118-5203-4014-9a27-09f38138af78" /></div>
        </div>
    )
}

export default Title