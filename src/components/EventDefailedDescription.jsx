

function EventDefailedDescription({currentEvent}){
    return (
        <div>
            <p>{currentEvent.name}</p>
            <p>{currentEvent.address}</p>
            <p>{currentEvent.dateTime}</p>
            <p>0 / {currentEvent.maxParticipants}</p>
            <p>{currentEvent.description}</p>
            <p>PARTICIPANTS:</p>
            <ul>
                {currentEvent.eventParticipants.map(participant => <li key={participant.firstName}> {participant.firstName} {participant.lastName} </li>)}
            </ul>
        </div>
    );

}

export default EventDefailedDescription;