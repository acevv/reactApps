import PropTypes from 'prop-types'
import Button from './Button'
import React from 'react'

const Header = ({title, onAdd, showAdd}) => {
    

  return (
    <header className='header'>
        <h1>{title}</h1>
        {/* <button className='btn'>Add</button> */}
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task tracker',
  }

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black',
// }


  export default Header
