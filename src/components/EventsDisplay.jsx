import { useState, useEffect } from 'react'
import axios from 'axios'

function EventsDisplay({selectEvent, refreshCounter}){
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        axios.get('/events/get_events')
            .then(function (response) {
                console.log(response);
                setEvents(response.data)
            })
            .catch(function (error) {
                // handle error
                setEvents([]);
                console.log(error);
            });
        return () => {
            controller.abort();
          };
    }, [refreshCounter]);

    return (<ul>
       {events.map(event =>
               (<li key={event.id}>
               <button onClick={()=>selectEvent(event.id)}>
               {event.name} IN {event.address} Time: {event.dateTime} Participants: 0 / {event.maxParticipants}
               </button>
               </li>)
             )}
    </ul>);

}

export default EventsDisplay;