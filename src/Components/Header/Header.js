import React from 'react'
import Rate from '../Rate'

import './Header.css'

const Header = ({setInput, rating, setrating}) => {
    return (
        <div className="search">
        <input
          type="text"
          placeholder="Type movie name to search"
          onChange={(e) => setInput(e.target.value)}
        />
        <Rate rating={rating} setrating={setrating} />
      </div>
  );
    
    
}

export default Header
