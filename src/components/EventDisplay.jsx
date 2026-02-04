import { useState, useEffect } from 'react'
import axios from 'axios'
import ParticipantRegistrationForm  from "./ParticipantRegistrationForm.jsx";
import EventDefailedDescription from "./EventDefailedDescription.jsx";

function EventDisplay({currentEventId}){
    const [currentEvent, setCurrentEvent] = useState(null);
    //Causes event update when a successful registration happens.
    const [registrationCounter, setRegistrationCounter] = useState(0);

    const formSubmittedSuccessfully = () =>{
        setRegistrationCounter(registrationCounter + 1);
    }

    useEffect(() => {
        if(currentEventId > 0){
            axios.get('/events/get_event', {params:{event_id:currentEventId}})
            .then(function (response) {
                // handle success
                console.log(response);
                setCurrentEvent(response.data);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              });
        }else{
            setCurrentEvent(null);
        }
    }, [currentEventId, registrationCounter]);

    return (<>{ currentEvent ? (<div>
        <h2 className="title is-3">Event Details</h2>
        <EventDefailedDescription currentEvent={currentEvent} />
        <ParticipantRegistrationForm currentEventId={currentEventId} formSubmittedSuccessfully={formSubmittedSuccessfully} />
    </div>) : (<div className="notification is-light">
        <p>Select an event to view details and register.</p>
    </div>)}</>);
}

export default EventDisplay;