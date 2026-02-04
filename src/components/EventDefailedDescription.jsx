

function EventDefailedDescription({currentEvent}){
    return (
        <div className="box">
            <h3 className="title is-4">{currentEvent.name}</h3>
            <div className="content">
                <p><strong>Location:</strong> {currentEvent.address}</p>
                <p><strong>Date & Time:</strong> {new Date(currentEvent.dateTime).toLocaleString()}</p>
                <p><strong>Capacity:</strong> {currentEvent.eventParticipants.length} / {currentEvent.maxParticipants} participants</p>
                <p><strong>Description:</strong> {currentEvent.description}</p>
                <p><strong>Participants:</strong></p>
                {currentEvent.eventParticipants.length === 0 ? (
                    <p>No participants yet.</p>
                ) : (
                    <ul>
                        {currentEvent.eventParticipants.map(participant => <li key={participant.firstName}> {participant.firstName} {participant.lastName} </li>)}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default EventDefailedDescription;