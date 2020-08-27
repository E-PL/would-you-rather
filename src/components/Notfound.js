import React from 'react';

/**
 * Notfound component
 *
 * @description The NotFound component will be rendered when a user visit an url with a non existent poll id or another wrong url. It's just a soft 404 and doesn't actually return a 404 http error code.
 * @export Component
 * @returns Children components
 */
export default function Notfound() {
  return (
    //TODO: maybe add some more content
    <>
      <h2>Not found 404</h2>
    </>
  );
}
