import { useState, useEffect } from 'react'
import axios from 'axios'

function EventDisplay({currentEventId}){
    const [currentEvent, setCurrentEvent] = useState(null);

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
    }, [currentEventId]);

    return (<>{ currentEvent && (<div>
        <p>{currentEvent.name}</p>
        <p>{currentEvent.address}</p>
        <p>{currentEvent.dateTime}</p>
        <p>0 / {currentEvent.maxParticipants}</p>
        <p>{currentEvent.description}</p>
        <p>PARTICIPANTS:</p>
        <ul>
            {currentEvent.eventParticipants.map(participant => <li key={participant.firstName}> {participant.firstName} {participant.lastName} </li>)}
        </ul>
    </div>)}</>);
}

export default EventDisplay;