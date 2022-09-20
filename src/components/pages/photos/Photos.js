// v9 compat packages are API compatible with v8 code
import React, { useEffect, useState, } from "react";
import ReactDOM from "react-dom";
import fbConfig from '../../../firebase/fbConfig'
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { collection, getDocs } from "firebase/firestore";

// async getPhotos() {
//     const querySnapshot = await getDocs(collection(db, "photos"));
//     querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//     });
// }




function Photos() {

    // const firestore = firebase.firestore();
    // const photosRef = firestore.collection('photos')
    // const photoQuery = photosRef.orderBy('src');
    // const [photos] = useCollectionData(photoQuery, { idField: 'id'});
        const [photos] = useState([]);
      
        useEffect(() => {
            const getPhotos = async () => {
                const querySnapshot = await getDocs(collection(firebase.firestore(), "photos"));
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    photos.push(doc.data());
                });
            };
          
            getPhotos(); // run it, run it
            console.log(photos);

            return () => {
              // this now gets called when the component unmounts
            };
        }, []);
      
        // if (!photos) return <div>Loading...</div>;
      
        return (
            <div className="photos-container">
                {photos && photos.map(photo => <div key={photo.id} className={photo.size}><img className={photo.size} src={photo.src} /></div>)}
            </div>
        );
 

    // console.log(docRef);

    // return (
    //     <div className="photos-container">
    //         {/* {photos && photos.map(photo => <div key={photo.id} className={photo.size}><img className={photo.size} src={photo.src} /></div>)} */}
    //     </div>
    // )
}

export default Photos