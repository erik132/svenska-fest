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

    return (<div className="box mt-4">
        <h4 className="title is-5">Register for this Event</h4>
        {responseMsg && <div className="notification is-info">{responseMsg}</div>}
        <form onSubmit={onFormSubmit}>
            <div className="field">
                <div className="control">
                    <input className="input" type="text" placeholder="First name here" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className="input" type="text" placeholder="Last name here" value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className="input" type="text" placeholder="Estonian ID code here" value={estonianIdCode} onChange={e => setEstonianIdCode(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-primary" type="submit">Register</button>
                </div>
            </div>
        </form>
    </div>);
}

export default ParticipantRegistrationForm;