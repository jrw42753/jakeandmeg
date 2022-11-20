import React from 'react';

const Registry = () => {

    function openRegistryLink(url) {
        window.open(url);
    }

    return (
        <div className="registry-container">
            <h1 className="page-title">Our Wedding Registry</h1>
            <div className="registry-flexbox-container">
                {/* Target */}
                <div className="registry-flexbox-item" onClick={() => openRegistryLink("https://www.target.com/gift-registry/gift/megjake")}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/logos%2FTarget_Bullseye-Logo_Red_transparent-min.png?alt=media&token=3210db59-536d-48d5-995a-85242466b36c" className="registry-logo" />
                    <p className="registry-link">Target</p>
                </div>
                {/* Bed Bath & Beyond */}
                <div className="registry-flexbox-item" onClick={() => openRegistryLink("https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/551984546?eventType=Wedding")}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/logos%2Fbed-bath-beyond-logo.png?alt=media&token=86215eb8-3ea1-4832-bd7a-937c95ad8d7f" className="registry-logo" />
                    <p className="registry-link">Bed Bath & Beyond</p>
                </div>
            </div>
            <h4 className="registry-gift-card-title">Gift Card Options</h4>
            <div className="registry-flexbox-container">
                {/* Nebraska Furniture Mart */}
                <div className="registry-flexbox-item" onClick={() => openRegistryLink("https://www.nfm.com/giftcards")}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/logos%2FNebraska_Furniture_Mart_logo-min.png?alt=media&token=d892438b-9be6-4fbe-aa9b-8dfc237d9d4f" className="registry-logo" />
                    <p className="registry-link">Nebraska Furniture Mart</p>
                </div>
                {/* Lowe's */}
                <div className="registry-flexbox-item" onClick={() => openRegistryLink("https://www.lowes.com/l/shop/gift-cards")}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/logos%2FLowes_logo_pms_280-min.png?alt=media&token=d23f87a1-f281-4630-a7d3-ec1e35bada5a" className="registry-logo" />
                    <p className="registry-link">Lowe's</p>
                </div>
            </div>
        </div>
    )
}

export default Registry