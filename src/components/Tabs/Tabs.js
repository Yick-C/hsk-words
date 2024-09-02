import React from 'react'

const Tabs = ({levels, currentLevel, onSelectLevel}) => {
  return (
    <div className='tabs'>
        {levels.map(level => (
            <button key={level} onClick={() => onSelectLevel(level)}>{level}</button>
        ))}
    </div>
  )
}

export default Tabs