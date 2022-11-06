import React from 'react';

const Registry = () => {

    function openRegistryLink(url) {
        console.log(url);
        window.open(url);
    }

    return (
        <div className="registry-container">
            <h1 className="page-title">Our Wedding Registry</h1>
            <div className="registry-flexbox-container">
                {/* Target */}
                <div className="registry-flexbox-item" onClick={() => openRegistryLink("https://www.target.com/gift-registry/gift/megjake")}>
                    <img height="100px" src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/logos%2FTarget_Bullseye-Logo_Red_transparent.png?alt=media&token=6b75f3fd-b333-4e92-bead-24a44bfd513a" className="registry-logo" />
                    <p className="registry-link">Target</p>
                </div>
                {/* Bed Bath & Beyond */}
                <div className="registry-flexbox-item" onClick={() => openRegistryLink("https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/551984546?eventType=Wedding")}>
                    <img height="100px" src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/logos%2Fbed-bath-beyond-logo.png?alt=media&token=86215eb8-3ea1-4832-bd7a-937c95ad8d7f" className="registry-logo" />
                    <p className="registry-link">Bed Bath & Beyond</p>
                </div>
            </div>
            <h4 className="registry-gift-card-title">Gift Card Options</h4>
            <div className="registry-flexbox-container">
                {/* Nebraska Furniture Mart */}
                <div className="registry-flexbox-item" onClick={() => openRegistryLink("https://www.nfm.com/giftcards")}>
                    <img height="100px" src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/logos%2FNebraska_Furniture_Mart_logo.png?alt=media&token=d446f69c-bcbe-4d7b-8f00-ab8a24952359" className="registry-logo" />
                    <p className="registry-link">Nebraska Furniture Mart</p>
                </div>
                {/* Lowe's */}
                <div className="registry-flexbox-item" onClick={() => openRegistryLink("https://www.lowes.com/l/shop/gift-cards")}>
                    <img height="100px" src="https://firebasestorage.googleapis.com/v0/b/jakeandmeg.appspot.com/o/logos%2FLowes_logo_pms_280.png?alt=media&token=0e86e028-62a8-4c9a-98b4-e3251802929c" className="registry-logo" />
                    <p className="registry-link">Lowe's</p>
                </div>
            </div>
        </div>
    )
}

export default Registry