import React from 'react'
import { processData } from './ProcessData'
const ProcessGrid = () => {
  return (
    <div className='process-grid'>
      {processData.map(({id, title, description, imageUrl}) => {
          return (
              <div className='process-item' key={id}>
                <div className='process-item-image'><img className='image-object' width="100%" height="100%" src={imageUrl} alt={title} /></div>
                <div className='process-item-title'>{title}</div>
                <div className='process-item-description'>{description}</div>
              </div>
          )
      })}
    </div>
  )
}

export default ProcessGrid