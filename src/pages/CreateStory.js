import React from 'react'

const CreateStory = () => {
  return (
    <div className='createStoryPage'>
      {""}
      <div className='CSContainer'>
        <h1>Create your Story</h1>
        <div className='inputGp'>
          <label>Title of your Story: </label>
          <input placeholder='Title...'></input>
        </div>
        <div className='inputGp'>
          <label>Story: </label>
          <textarea placeholder='Story..'/>
        </div>
        <button>Submit Story</button>

      </div>
    </div>
  )
}

export default CreateStory
