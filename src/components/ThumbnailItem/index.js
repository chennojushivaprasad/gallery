// Write your code here.
import React from 'react'
import './index.css'

class ThumbnailItem extends React.Component {
  update = () => {
    const {thumbnailDetails, updateImg} = this.props
    const {id} = thumbnailDetails
    updateImg(id)
  }

  render() {
    const {thumbnailDetails, isActive} = this.props
    const {thumbnailUrl} = thumbnailDetails

    return (
      <li className="item">
        <button type="button" className="button" onClick={this.update}>
          <img
            alt="thumbnailAltText"
            className={`thumbnail ${isActive ? 'active-thumbnail' : ''}`}
            src={thumbnailUrl}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
