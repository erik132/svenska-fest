import { useState } from 'react'
import axios from 'axios'

function ParticipantRegistrationForm({currentEventId, formSubmittedSuccessfully}){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [estonianIdCode, setEstonianIdCode] = useState('');
    const [responseMsg, setResponseMsg] = useState();

    const onFormSubmit = (e) =>{
        e.preventDefault();
        if (currentEventId > 0) {
            axios.post('/participants/register_participant',
                {eventId: currentEventId, firstName: firstName, lastName: lastName, estonianIdCode: estonianIdCode})
                .then(function (response) {
                    setResponseMsg(response.data);
                    formSubmittedSuccessfully();
                })
                .catch(function (error) {
                    console.log(error);
                    setResponseMsg("Error happened: " + error.response.data);
                });
        } else {
            setResponseMsg("You currently have an incorrect event selected somehow.");
        }
    }

    return (<div>
        {responseMsg && <p>{responseMsg}</p>}
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="First name here" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            <input type="text" placeholder="Last name here" value={lastName} onChange={e => setLastName(e.target.value)}/>
            <input type="text" placeholder="Estonian ID code here" value={estonianIdCode} onChange={e => setEstonianIdCode(e.target.value)}/>
            <input type="submit"/>
        </form>
    </div>);
}

export default ParticipantRegistrationForm;