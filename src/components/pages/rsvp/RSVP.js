import React, { useEffect, useState } from "react";
import firebase from 'firebase/compat/app';
import { collection, getDocs, doc, updateDoc, getFirestore } from "firebase/firestore";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Spinner from 'react-bootstrap/Spinner';


function RSVP() {

        const [guestList, setGuestList] = useState();
        const [value, setValue] = useState('');
        const [selectedGuest, setSelectedGuest] = useState();
        const [totalInvitedGuests, setTotalInvitedGuests] = useState();
        const [canMakeIt, setCanMakeIt] =  useState(false);
        const [cannotMakeIt, setCannotMakeIt] = useState(false);
        const [selectedGuestAdultsKids, setSelectedGuestAdultsKids] = useState();
        const [initialAdultsPlusKids, setInitialAdultsPlusKids] = useState();
        const [selectedRehearsalGuests, setSelectedRehearsalGuests] = useState(0);
        const [kidsAttending, setKidsAttending] = useState(0);
        const [adultsAttending, setAdultsAttending] = useState(0);
        const [submitToFirestoreRes, setSubmitToFirestoreRes] = useState();

        // const db = getFirestore()



        // The forwardRef is important!!
        // Dropdown needs access to the DOM node in order to position the Menu
        const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
            <a href="" ref={ref} className="megjake-button-secondary"
                onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                }}
            >
                {children}
                &nbsp;&nbsp;
                <i className="fa fa-solid fa-caret-down"></i>
            </a>
        ));
        
        // forwardRef again here!
        // Dropdown needs access to the DOM of the Menu to measure it
        const CustomMenu = React.forwardRef(
            ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
  
                return (
                    <div>
                    { className.includes("show") ? <div className='background-gray'></div> : <></> }
                    <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
                        
                        <Form.Control
                            autoFocus
                            className="mx-3 mt-2 mb-3 custom-rsvp-input"
                            placeholder="Type to search..."
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                            // type="search"
                        />
                        <ul className="list-unstyled">
                            {
                                value.length > 3 ?
                                    React.Children.toArray(children).filter((child) =>
                                        !value || child.props.children.toLowerCase().includes(value.toLowerCase()),
                                    )
                                : <></>
                            }
                        </ul>
                    </div>
                    </div>
                );
            },
        );
      
        useEffect(() => {
            getGuests();
        }, [])

        // useEffect(() => {
        //     console.log("guestList", guestList)
        // },[guestList])

        useEffect(() => {
            // setTotalInvitedGuests(selectedGuest.adults)
            console.log("selectedGuest", selectedGuest)
            if (selectedGuest) {
                const adultsPlusKids = selectedGuest.kids ? selectedGuest.kids + selectedGuest.adults : selectedGuest.adults;
                setSelectedGuestAdultsKids(adultsPlusKids);
                setInitialAdultsPlusKids(adultsPlusKids);
                setCanMakeIt(selectedGuest.hasAcceptedInvite);
                setCannotMakeIt(selectedGuest.hasDeclinedInvite);

                if (selectedGuest.adultsAttending) {
                    setAdultsAttending(selectedGuest.adultsAttending);
                } else {
                    setAdultsAttending(selectedGuest.adults);
                }

                if (selectedGuest.kidsAttending) {
                    setKidsAttending(selectedGuest.kidsAttending);
                } else {
                    setKidsAttending(selectedGuest.kids);
                }

                if (selectedGuest.rehearsalAttending) {
                    setSelectedRehearsalGuests(selectedGuest.rehearsalAttending);
                } else if(selectedGuest.rehearsal) {
                    setSelectedRehearsalGuests(selectedGuest.rehearsal);
                }
            }
        },[selectedGuest])

        useEffect(() => {
            console.log("submitToFirestoreRes", submitToFirestoreRes)
            if (submitToFirestoreRes === "success") {
                setSelectedGuest(null);
                setGuestList(null);
                getGuests();
            }
        }, [submitToFirestoreRes])

        function getGuests() {
            getDocs(collection(firebase.firestore(), "guest-invites")).then((x) => {
                setGuestList(x.docs.map(doc => doc.data()))
            });
        }
 
        function selectName(guest) {
            console.log("guest", guest);
            setSelectedGuest(guest);
            setSubmitToFirestoreRes(null);
        }

        function changeMakeItValue(response) {
            if (response === 'can') {
                // setSelectedGuest({...selectedGuest, hasAcceptedInvite: true, hasDeclinedInvite: false});
                setCanMakeIt(true);
                setCannotMakeIt(false);
            } else if (response === 'cannot') {
                // setSelectedGuest({...selectedGuest, hasAcceptedInvite: false, hasDeclinedInvite: true});
                setCanMakeIt(false);
                setCannotMakeIt(true);
                setAdultsAttending(0);
                setSelectedRehearsalGuests(0);
                if (selectedGuest.kids) {
                    setKidsAttending(0);
                }
            }
        }

        async function handleSubmit() {
            const selectedGuestRef = doc(firebase.firestore(), 'guest-invites', selectedGuest.id);
            console.log(selectedGuestRef)
            updateSelectedGuest(selectedGuestRef);
        }

        async function updateSelectedGuest(selectedGuestRef) {
            if (selectedGuest.kids && selectedGuest.rehearsal) {
                const res = await updateDoc(selectedGuestRef, {
                    hasAcceptedInvite: canMakeIt, 
                    hasDeclinedInvite: cannotMakeIt, 
                    adultsAttending: Number(adultsAttending), 
                    kidsAttending: Number(kidsAttending),
                    rehearsalAttending: Number(selectedRehearsalGuests)
                }).then(() => setSubmitToFirestoreRes("success"))
                    .catch((error) => console.log(error));
            } else if (selectedGuest.kids && !selectedGuest.rehearsal) {
                const res = await updateDoc(selectedGuestRef, {
                    hasAcceptedInvite: canMakeIt, 
                    hasDeclinedInvite: cannotMakeIt, 
                    adultsAttending: Number(adultsAttending), 
                    kidsAttending: Number(kidsAttending)
                }).then(() => setSubmitToFirestoreRes("success"))
                    .catch((error) => console.log(error));;
            } else if (!selectedGuest.kids && selectedGuest.rehearsal) {
                const res = await updateDoc(selectedGuestRef, {
                    hasAcceptedInvite: canMakeIt, 
                    hasDeclinedInvite: cannotMakeIt, 
                    adultsAttending: Number(adultsAttending), 
                    rehearsalAttending: Number(selectedRehearsalGuests)
                }).then(() => setSubmitToFirestoreRes("success"))
                    .catch((error) => console.log(error));;
            } else {
                const res = await updateDoc(selectedGuestRef, {
                    hasAcceptedInvite: canMakeIt, 
                    hasDeclinedInvite: cannotMakeIt, 
                    adultsAttending: Number(adultsAttending), 
                }).then(() => setSubmitToFirestoreRes("success"))
                    .catch((error) => console.log(error));;
            }
        }

        function selectGuestJSX() {
            return (
                <>
                <Dropdown className='custom-dropdown'>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        Select Your Name
                    </Dropdown.Toggle>
                    <Dropdown.Menu as={CustomMenu} className='custom-dropdown-menu'>
                        
                        {
                            guestList.slice().sort((a,b) => a.name.localeCompare(b.name)).map((guest, index) =>(
                                <Dropdown.Item key={"guest-item-" + index} eventKey={index} onClick={() => selectName(guest)}>{guest.name}</Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>
                {
                    selectedGuest ? 
                        <div className='guest-info-container'>
                            <h4 style={{textAlign: "center", marginBottom: "20px"}}>{selectedGuest.name}</h4>
                            <Form className="rsvp-form">
                                <fieldset>
                                    <legend>Wedding Reception</legend>
                                    <Form.Check className='custom-form-item' name='flexRadioDefault' type='radio' id='default-radio1' label='Yes, I can make it' checked={canMakeIt} onChange={() => changeMakeItValue('can')} />
                                    <Form.Check className='custom-form-item' name='flexRadioDefault' type='radio' id='default-radio2' label='Sorry, I cannot make it' checked={cannotMakeIt} onChange={() => changeMakeItValue('cannot')} />
                                    <div className='guest-number-div' style={selectedGuest.kids && {marginBottom: "15px"}}>
                                        <Form.Control
                                            type="number"
                                            min='0'
                                            max={selectedGuest.adults}
                                            className='guest-number-input'
                                            value={adultsAttending}
                                            onChange={e => {
                                                if(Number(e.target.value) >= 0 && Number(e.target.value) <= selectedGuest.adults) {
                                                    setAdultsAttending(e.target.value);
                                                }
                                            }}
                                        />
                                        <p style={{margin: "0px 0px 0px 10px"}}>out of {selectedGuest.adults} adults will be attending</p>
                                    </div>
                                    {
                                        selectedGuest.kids ?
                                            <div className='guest-number-div'>
                                                <Form.Control
                                                    type="number"
                                                    min='0'
                                                    max={selectedGuest.kids}
                                                    className='guest-number-input'
                                                    value={kidsAttending}
                                                    onChange={e => {
                                                        if(Number(e.target.value) >= 0 && Number(e.target.value) <= selectedGuest.kids) {
                                                            setKidsAttending(e.target.value);
                                                        }
                                                    }}
                                                />
                                                <p style={{margin: "0px 0px 0px 10px"}}>out of {selectedGuest.kids} kids will be attending</p>
                                            </div>
                                            : <></>
                                    }
                                </fieldset>
                                {
                                    selectedGuest.rehearsal ?
                                        <fieldset>
                                            <legend>Rehearsal Dinner</legend>
                                            <div className='guest-number-div'>
                                                <Form.Control
                                                    type="number"
                                                    min='0'
                                                    max={selectedGuest.rehearsal}
                                                    className='guest-number-input'
                                                    value={selectedRehearsalGuests}
                                                    onChange={e => {
                                                        if(Number(e.target.value) >= 0 && Number(e.target.value) <= selectedGuest.rehearsal) {
                                                            setSelectedRehearsalGuests(e.target.value);
                                                        }
                                                    }}
                                                />
                                                <p style={{margin: "0px 0px 0px 10px"}}>out of {selectedGuest.rehearsal} guests will be attending</p>
                                            </div>
                                        </fieldset>
                                        : <></>
                                }
                            </Form>
                            
                            <a className="megjake-button rsvp-button" onClick={() => handleSubmit()}>SUBMIT</a>
                            <div className="incorrect-info-message">
                                <p>If you believe something related to your RSVP is incorrect or if your RSVP needs to be changed, please call/text Meg at <a className="megjake-button-secondary" href="tel:+14026610958">(402) 661-0958</a></p>
                            </div>
                        </div>
                    : <></>
                }
                </>
            )
        }

        function successMessage() {
            return (
                <div className="success-div">
                    <p>Your submission was successful</p><i className="fa fa-solid fa-check" style={{color: "#18af52"}}></i>
                </div>
            )
        }

        return (
            <div className="rsvp-container">
                <h1 className="page-title">Please RSVP Here</h1>
                {
                    guestList ? 
                        selectGuestJSX()
                        : 
                            <Spinner className="custom-dropdown" animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                }
                {
                    submitToFirestoreRes && submitToFirestoreRes === "success" && !selectedGuest &&
                        successMessage()
                }
            </div>
        );
        
}

export default RSVP