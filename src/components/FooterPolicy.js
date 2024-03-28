import React from 'react'
import { Link } from 'react-router-dom';
import { FooterNavApi } from './Data/FooterApi';
import { TopOverlay } from './Utils';

const FooterPolicy = () => {
  return (
    <>
      <div className="footer-section">

        <div className="container">
          <ul className="footer-navigation">
            {FooterNavApi?.map((link, i) => {
              return (
                <li key={i}>
                  <Link
                    to={link.url}

                  >
                    {link.title}

                  </Link>

                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
export default FooterPolicy