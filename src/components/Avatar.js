import React from 'react';


/**
 * Avatar component
 *
 * @description The Avatar component takes the url of the user avatar and return an image.
 * @export Component
 * @param {Object} props
 * @param {String} props.avatarUrl The url of the user avatar
 * @returns Children components
 */
export default function Avatar(props) {

  return (
    <img
      src={props.avatarUrl}
      alt={props.name + ' avatar'}
      style={{ width: '100px' }}
    ></img>
  );
  
}
