// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, location, name} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onclickEvnets = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onclickEvnets}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
