import React from "react";

function ImageAtom({ src, style, alt }) {
  return <img src={src} alt={alt} style={style} />;
}

export default ImageAtom;
