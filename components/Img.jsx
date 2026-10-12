import { useState } from 'react';

// <img> that switches to a backup address if the first one fails to load
export default function Img({ src, fallback, alt = '', ...rest }) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      src={failed && fallback ? fallback : src}
      alt={alt}
      onError={() => fallback && setFailed(true)}
      {...rest}
    />
  );
}
