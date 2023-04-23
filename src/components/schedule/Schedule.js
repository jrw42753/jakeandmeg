import React from "react";



function Schedule() {

        

        return (
            <div className="rsvp-container">
                <div>
                    <h1 className="page-title" style={{marginBottom: "10px"}}>Wedding Day Schedule</h1>
                    <p style={{textAlign: "center"}}>Saturday, August 26th, 2023</p>
                </div>
                <hr className="schedule-divider" />
                <div className="schedule-section">
                    <div className="schedule-section-time">
                        <h5>2:00pm</h5>
                    </div>
                    <div className="schedule-section-details">
                        <h5>Ceremony</h5>
                        <p>St. John's Church at Creighton University
                        <br/>2500 California Plaza
                        <br/>Omaha, NE 68178</p>
                    </div>
                </div>
                <hr className="schedule-divider" />
                <div className="schedule-section">
                    <div className="schedule-section-time time-desktop">
                        <h5>5:00pm - 6:00pm</h5>
                    </div>
                    <div className="schedule-section-time time-mobile">
                        <h5>
                            5:00pm
                            <br/>
                            -
                            <br/>
                            6:00pm
                        </h5>
                    </div>
                    <div className="schedule-section-details">
                        <h5>Cocktail Hour</h5>
                        <p>Millard Social Hall
                        <br/>10508 South 144th Street
                        <br/>Omaha, NE 68138</p>
                    </div>
                </div>
                <hr className="schedule-divider" />
                <div className="schedule-section">
                    <div className="schedule-section-time time-desktop">
                        <h5>6:00pm - 11:00pm</h5>
                    </div>
                    <div className="schedule-section-time time-mobile">
                        <h5>
                            6:00pm
                            <br/>
                            -
                            <br/>
                            11:00pm
                        </h5>
                    </div>
                    <div className="schedule-section-details">
                        <h5>Dinner & Dancing</h5>
                        <p>Millard Social Hall
                        <br/>10508 South 144th Street
                        <br/>Omaha, NE 68138</p>
                    </div>
                </div>
                <hr className="schedule-divider" />
                <p className="schedule-footer">*Complimentary shuttle service will be available between the Hampton Inn & Suites Omaha Southwest- La Vista and Millard Social Hall, 4:30-11:30pm.</p>
            </div>
        );
        
}

export default Schedule