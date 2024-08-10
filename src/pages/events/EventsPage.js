import { useState } from "react";
import events from "../../data/eventsArray";
import './EventsStyles.css';

const EventsPage = () => {
    const [eventsData, setEventsData] = useState(events);

    return (
        <div className="events-container">
            <h1 className="events-title">Previous & Events Coordinated</h1>
            <div className="events-info">
                <div className="events-list">
                    {eventsData.map(event => (
                        <div key={event.eventId} className='event-item'>
                            <img key={event.eventId} src={event.eventImage} alt={event.eventName} className='event-image' />
                            <div className="event-info"> 
                                <h2>{event.eventName}</h2>
                                <p>{event.eventDate}</p>
                                <p>{event.eventLocation}</p>
                                <p>{event.eventDescription}</p>
                                <p>{event.eventTime}</p>   
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default EventsPage;