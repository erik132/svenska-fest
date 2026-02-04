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

    return (<div className="content">
       {events.length === 0 ? (
           <p>No events available.</p>
       ) : (
           events.map(event =>
               (<div key={event.id} className="box mb-3" style={{cursor: 'pointer'}} onClick={()=>selectEvent(event.id)}>
                   <p className="title is-5 mb-2">{event.name}</p>
                   <p className="mb-1"><strong>Location:</strong> {event.address}</p>
                   <p className="mb-1"><strong>Date & Time:</strong> {new Date(event.dateTime).toLocaleString()}</p>
                   <p><strong>Participants:</strong> 0 / {event.maxParticipants}</p>
               </div>)
           )
       )}
    </div>);

}

export default EventsDisplay;