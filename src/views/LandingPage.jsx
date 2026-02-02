import { useState } from 'react'
import PageSwapButton from "../components/PageSwapButton.jsx"
import EventsDisplay from "../components/EventsDisplay.jsx"
import EventDisplay from "../components/EventDisplay.jsx"

function LandingPage({onPageSwap}){
    const [currentEventId, setCurrentEventId] = useState(-1);

    const selectEvent = (eventId) =>{
    console.log("New eventId " + eventId);
        setCurrentEventId(eventId);
    }

    return (<div>
        <h1>LandingPage</h1>
        <PageSwapButton onPageSwap={onPageSwap} targetPage='LoginPage' displayName='Login' />
        <EventsDisplay selectEvent={selectEvent} />
        <EventDisplay currentEventId={currentEventId} />
        <div>
            <p>Event Creation here, but hide if user is not authenticated.</p>
        </div>
    </div>);
}

export default LandingPage;