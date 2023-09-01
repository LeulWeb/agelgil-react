import React from 'react'

const MentionsCard = (props) => {
  return (
      <div className="shadow-mg rounded-md">
          <div>
              <img src={props.thumbnail} alt="" />
              <div className="flex">
                  <div className="h-40 w-40 rounded-full">
                      <img src={props.logo} alt="" className='object-cover' />
                  </div>
                  <p>{props.message}</p>
              </div>
          </div>
      </div>
  )
}

export default MentionsCard