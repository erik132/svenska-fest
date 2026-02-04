import { useState } from 'react'
import PageSwapButton from "../components/PageSwapButton.jsx"
import EventsDisplay from "../components/EventsDisplay.jsx"
import EventDisplay from "../components/EventDisplay.jsx"
import EventCreationDisplay from "../components/EventCreationDisplay.jsx"

function LandingPage({onPageSwap}){
    const [currentEventId, setCurrentEventId] = useState(-1);
    const [eventsCreatedCount, setEventsCreatedCount] = useState(0);

    const selectEvent = (eventId) =>{
        console.log("New eventId " + eventId);
        setCurrentEventId(eventId);
    }

    const eventCreationSuccessful = () => {
        setEventsCreatedCount(eventsCreatedCount + 1);
    }

    return (<div>
        <h1>LandingPage</h1>
        <PageSwapButton onPageSwap={onPageSwap} targetPage='LoginPage' displayName='Login' />
        <EventsDisplay selectEvent={selectEvent} refreshCounter={eventsCreatedCount}/>
        <EventDisplay currentEventId={currentEventId} />
        <EventCreationDisplay eventCreatedSuccessfully={eventCreationSuccessful} />
    </div>);
}

export default LandingPage;