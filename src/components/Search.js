import React from 'react'

const Search = () => {
  return (
    <div className='search'>

      <div className="searchform">
        <input type="text" placeholder='Find a User'/>
      </div>

      <div className="userchat">
        <img src="https://img.freepik.com/premium-photo/young-man-is-holding-book-smiling_905085-17.jpg" alt="" />
        <div className="userchatinfo">
          <span>Hardy</span>
        </div>
      </div>
      
    </div>
  )
}

export default Search
