import React from 'react';

const Accommodations = () => {

    return (
        <div className="page-container">
            <h1 className="hotel-title">Hotel Block</h1>
            <h3 className="hotel-name">Hampton Inn & Suites Omaha Southwest-La Vista</h3>
            <p className="hotel-address">12331 Southport Parkway La Vista, Nebraska 68128 USA</p>
            <p className="hotel-phone">(402) 895-2900, prompt 0</p>
            <p><a className="megjake-button" target="_blank" href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=OMALVHX&groupCode=CHHMWW&arrivaldate=2023-08-25&departuredate=2023-08-27&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT">ONLINE BOOKING</a></p>
            <p className="accommodations-blurb">This Hampton Inn is a short drive away from Meg and Jake's reception, Millard Social Hall. There will be a hotel shuttle the day of the Wedding provided to take guests to and from the reception. There is a group rate, so be sure to mention that you are with the Wiesenthal/Maynard Wedding if you call. The Online Booking button, however, will automatically take you to a page that will include the group rate.</p>
        </div>
    )
}

export default Accommodations