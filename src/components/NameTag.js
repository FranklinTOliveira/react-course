import React from "react";

function NameTag({ name, children }) {
  return (
    <div>
      {name ? <div>Hi I am {name}</div> : <div>Hi I am {children}</div>}
    </div>
  );
}

export default NameTag;
