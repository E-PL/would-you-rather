import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { populateStore } from '../actions/shared';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(populateStore());
  }, [dispatch]);

  return (
    <>
      <nav>Nav</nav>
      <section>Section</section>
      <footer>footer</footer>
    </>
  );
}
