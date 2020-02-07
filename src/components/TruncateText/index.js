import React from 'react';

const TruncateText = ({ text = 'No description' }) => {
  function truncate(str) {
    if (str) return str.length > 50 ? str.substring(0, 47) + '...' : str;
    else return 'No description';
  }

  return (
    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
      <small>{truncate(text)}</small>
    </span>
  );
};

export default TruncateText;
