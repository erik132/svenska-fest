import {useState} from "react";
import GeneralInputField from "./GeneralInputField.jsx";
import axios from "axios";
import Cookies from 'js-cookie'

function EventCreationDisplay({eventCreatedSuccessfully, refreshLogin}){
    const [eventName, setEventName] = useState("");
    const [address, setAddress] = useState("");
    const [eventDateTime, setEventDateTime] = useState(new Date());
    const [description, setDescription] = useState("");
    const [maxParticipants,setMaxParticipants] = useState(0);
    const [isSurstromming, setIsSurstromming] = useState(false);
    const [responseMsg, setResponseMsg] = useState(null);

    const onFormSubmit = (e) =>{
        e.preventDefault();
        const formPayload={name:eventName, address:address, description:description, dateTime:eventDateTime, maxParticipants:maxParticipants, isSurstromming:isSurstromming};
        const additionalOptions = {headers:{"Content-Type":"application/json", "Authorization":"Bearer " + Cookies.get('Authorization')}};

        axios.post('/events/create_event',
            formPayload, additionalOptions)
            .then(function (response) {
                setResponseMsg(response.data);
                eventCreatedSuccessfully();
            })
            .catch(function (error) {
                console.log(error);
                if (error.response.status === 403) {
                    setResponseMsg("Somehow you have been logged out.");
                    //Cookies.remove('Authorization');
                } else {
                    setResponseMsg("Error happened: " + error.response.data);
                }

            });
    }

    return (<div>
        <form onSubmit={onFormSubmit}>
            <GeneralInputField type="text" placeholder="Event name here" value={eventName} onChange={(e) => setEventName(e.target.value)} />
            <GeneralInputField type="text" placeholder="Address here" value={address} onChange={(e) => setAddress(e.target.value)} />
            <GeneralInputField type="datetime-local" value={eventDateTime} onChange={(e)=> setEventDateTime(e.target.value)}/>
            <GeneralInputField placeholder="Your event description goes here." type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <GeneralInputField labelMsg="Maximum Participants" type="number" value={maxParticipants} onChange={(e) => setMaxParticipants(e.target.value)} />
            <GeneralInputField labelMsg="Do you serve Surströmming?" type="checkbox" value={isSurstromming} onChange={(e) => setIsSurstromming(e.target.checked)}/>
            <div className="field">
                <div className="control">
                    <button className="button is-success" type="submit">Create Event</button>
                </div>
            </div>
            {responseMsg && <div className="notification is-success">{responseMsg}</div>}
        </form>
    </div>);
}

export default EventCreationDisplay;