import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
  <div className="card">
    <div className="top">
        <div className="logo">
            <img src={props.brandLogo} alt={`${props.company} logo`} />
        </div>
        <button className="save">Save <Bookmark /></button>
    </div>

    <div className="company">
        {props.company} <span className="time">{props.datePosted}</span>
    </div>

    <div className="role">
        {props.post}
    </div>

    <div className="tags">
        <div className="tag">{props.tag1}</div>
        <div className="tag">{props.tag2}</div>
    </div>

    <div className="bottom">
        <div>
            <div className="salary">{props.pay}</div>
            <div className="location">{props.location}</div>
        </div>

        <button className="apply"> Apply </button>
    </div>
  </div>
  )
}

export default Card
