import React from 'react';

import '../css/index.css';

function Item({ link, imageUrl, altText, className, title, titleClassName }) {
  return (
    <div className={className}>
      <a href={link}>
        <img src={imageUrl} alt={altText} />
        {title && <p className={titleClassName}>{title}</p>}
      </a>
    </div>
  );
}
export default Item;
