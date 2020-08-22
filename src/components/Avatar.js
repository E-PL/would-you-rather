import React from 'react';


export default function Avatar(props) {
  console.log(props.avatarUrl);
  return (
      <>
      <hr/>
<img src={props.avatarUrl} style={{width: "100px"}}></img>
    </>
  );
}
