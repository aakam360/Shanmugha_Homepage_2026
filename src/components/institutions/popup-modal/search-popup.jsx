import React, { useState } from 'react';
import searchdata from './searchdata'
import Link from 'next/link';
import LinkIcon from '@mui/icons-material/Link';

const SearchPopup = ({ isSearchOpen, setIsSearchOpen }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = searchdata.filter(item =>
    item.search_words.some(word =>
      word.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <div className={`edu-search-popup ${isSearchOpen ? 'open' : ''}`}>
        <div className="content-wrap">
          <div className="site-logo">
            <img
              className="logo-light"
              src="/assets/images/logo/png/main_logo.png"
              alt="logo"
            />
            <img
              className="logo-dark"
              src="/assets/images/logo/png/main_logo.png"
              alt="logo"
            />
          </div>
          <div className="close-button" onClick={() => setIsSearchOpen(false)}>
            <button className="close-trigger">
              <i className="icon-73"></i>
            </button>
          </div>
          <div className="inner">
            <input
              type="text"
              className="Oursite-search-popup-field"
              placeholder="Search Here..."
              value={searchTerm}

              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredData.length === 0 ? (
              <p>Sorry, Couldn't find your search.</p>
            ) : (
              filteredData.slice(0, 2).map((sdata, i) => (
                <div
                  key={i}
                  style={{ marginBottom: '2em' }}
                >

                  <Link href={sdata.link} style={{ marginBottom: 1, textDecoration: 'underline', display: 'flex', alignItems: 'center' }}>
                    <LinkIcon size="1.3rem" style={{ marginRight: '5px' }} /> {sdata.title}
                  </Link>
                  <p style={{ marginBottom: 1 }}>{sdata.Description}</p>
                  {searchTerm &&
                    <span style={{ color: 'green', }}>Includes : {searchTerm}</span>
                  }
                  <hr />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPopup;
