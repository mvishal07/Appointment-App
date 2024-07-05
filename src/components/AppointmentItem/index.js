import React from 'react'
import './index.css'

const AppointmentItem = props => {
  const {details, toggleIsFavorite} = props
  const {id, title, date, isFavorite} = details

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsFavorite(id)
  }

  return (
    <li className="appointment-item">
      <div className="appointment-info">
        <p>{title}</p>
        <p>{new Date(date).toLocaleDateString()}</p>
      </div>
      <button type="button" onClick={onClickStar} data-testid="star">
        <img src={starImgUrl} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
