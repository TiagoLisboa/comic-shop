import React from 'react';

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <div>Logo</div>
      <ul>
        <li>
          <Link to="/">Comics</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}
