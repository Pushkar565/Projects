import React, { useState } from 'react';
import "./Dropdown.css"

const Dropdown = () => {
  // State to manage whether each dropdown is open or closed
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Function to toggle a specific dropdown
  const toggleDropdown = (name) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div className="dropdown-container">
      {/* Dropdowns */}
      <div className="dropdown">
        {/* Header to toggle the dropdown on hover */}
        <h4
          onMouseEnter={() => toggleDropdown('newIn')}
          onMouseLeave={() => toggleDropdown('newIn')}
        >
          <h5>New in</h5>
        </h4>
        {/* Dropdown menu */}
        {openDropdowns['newIn'] && (
          <nav>
            <ul>
              <li>New in</li>
              <li>Clothing</li>
              <li>Trending</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>Brands</li>
              <li>Sportswear</li>
              <li>Topman</li>
              <li>Marketplace</li>
              <li>Sale</li>
            </ul>
          </nav>
        )}
      </div>
      {/* Repeat the same structure for other dropdowns */}
      {/* For example: */}
      <div className="dropdown">
        <h4
          onMouseEnter={() => toggleDropdown('clothing')}
          onMouseLeave={() => toggleDropdown('clothing')}
        >
          <h5>Clothing</h5>
        </h4>
        {openDropdowns['clothing'] && (
          <nav>
            <ul>
              <li>New in</li>
              <li>Clothing</li>
              <li>Trending</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>Brands</li>
              <li>Sportswear</li>
              <li>Topman</li>
              <li>Marketplace</li>
              <li>Sale</li>
            </ul>
          </nav>
        )}
      </div>

      <div className="dropdown">
        <h4
          onMouseEnter={() => toggleDropdown('Trending')}
          onMouseLeave={() => toggleDropdown('Trending')}
        >
          <h5>Trending</h5>
        </h4>
        {openDropdowns['Trending'] && (
          <nav>
            <ul>
              <li>New in</li>
              <li>Clothing</li>
              <li>Trending</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>Brands</li>
              <li>Sportswear</li>
              <li>Topman</li>
              <li>Marketplace</li>
              <li>Sale</li>
            </ul>
          </nav>
        )}
      </div>

      <div className="dropdown">
        <h4
          onMouseEnter={() => toggleDropdown('Shoes')}
          onMouseLeave={() => toggleDropdown('Shoes')}
        >
         <h5>Shoes</h5>
        </h4>
        {openDropdowns['Shoes'] && (
          <nav>
            <ul>
              <li>New in</li>
              <li>Clothing</li>
              <li>Trending</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>Brands</li>
              <li>Sportswear</li>
              <li>Topman</li>
              <li>Marketplace</li>
              <li>Sale</li>
            </ul>
          </nav>
        )}
      </div>

      <div className="dropdown">
        <h4
          onMouseEnter={() => toggleDropdown('Accessories')}
          onMouseLeave={() => toggleDropdown('Accessories')}
        >
         <h5>Accessories</h5>
        </h4>
        {openDropdowns['Accessories'] && (
          <nav>
            <ul>
              <li>New in</li>
              <li>Clothing</li>
              <li>Trending</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>Brands</li>
              <li>Sportswear</li>
              <li>Topman</li>
              <li>Marketplace</li>
              <li>Sale</li>
            </ul>
          </nav>
        )}
      </div>

      <div className="dropdown">
        <h4
          onMouseEnter={() => toggleDropdown('Brands')}
          onMouseLeave={() => toggleDropdown('Brands')}
        >
        <h5>Brands</h5>
        </h4>
        {openDropdowns['Brands'] && (
          <nav>
            <ul>
              <li>New in</li>
              <li>Clothing</li>
              <li>Trending</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>Brands</li>
              <li>Sportswear</li>
              <li>Topman</li>
              <li>Marketplace</li>
              <li>Sale</li>
            </ul>
          </nav>
        )}
      </div>

      <div className="dropdown">
        <h4
          onMouseEnter={() => toggleDropdown('Sportswear')}
          onMouseLeave={() => toggleDropdown('Sportswear')}
        >
         <h5>Sportswear</h5>
        </h4>
        {openDropdowns['Sportswear'] && (
          <nav>
            <ul>
              <li>New in</li>
              <li>Clothing</li>
              <li>Trending</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>Brands</li>
              <li>Sportswear</li>
              <li>Topman</li>
              <li>Marketplace</li>
              <li>Sale</li>
            </ul>
          </nav>
        )}
      </div>

      <div className="dropdown">
        <h4
          onMouseEnter={() => toggleDropdown('Topman')}
          onMouseLeave={() => toggleDropdown('Topman')}
        >
         <h5>Topman</h5>
        </h4>
        {openDropdowns['Topman'] && (
          <nav>
            <ul>
              <li>New in</li>
              <li>Clothing</li>
              <li>Trending</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>Brands</li>
              <li>Sportswear</li>
              <li>Topman</li>
              <li>Marketplace</li>
              <li>Sale</li>
            </ul>
          </nav>
        )}
      </div>

      <div className="dropdown">
        <h4
          onMouseEnter={() => toggleDropdown('Marketplace')}
          onMouseLeave={() => toggleDropdown('Marketplace')}
        >
        <h5>Marketplace</h5>
        </h4>
        {openDropdowns['Marketplace'] && (
          <nav>
            <ul>
              <li>New in</li>
              <li>Clothing</li>
              <li>Trending</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>Brands</li>
              <li>Sportswear</li>
              <li>Topman</li>
              <li>Marketplace</li>
              <li>Sale</li>
            </ul>
          </nav>
        )}
      </div>

      <div className="dropdown">
        <h4
          onMouseEnter={() => toggleDropdown('Sale')}
          onMouseLeave={() => toggleDropdown('Sale')}
        >
         <h5>Sale</h5>
        </h4>
        {openDropdowns['Sale'] && (
          <nav>
            <ul>
              <li>New in</li>
              <li>Clothing</li>
              <li>Trending</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>Brands</li>
              <li>Sportswear</li>
              <li>Topman</li>
              <li>Marketplace</li>
              <li>Sale</li>
            </ul>
            
          </nav>
        )}
      </div>

      
      {/* Repeat the same structure for other dropdowns */}
    </div>
  );
};

export default Dropdown;