import React from 'react';
import Img from 'react-image';
import { LoadingCircle } from 'components';
import './ImageLoader.scss';

const ImageLoader = ({ src, alt, theme = 'white', loader }) => {
  if (!loader) {
    loader = <DefaultLoading theme={theme} />;
  }

  // return loader; // for test
  return <Img src={src} alt={alt} loader={loader} />;
};

export const DefaultLoading = ({ theme }) => (
  <div className={`image-default-loading ${theme}`}>
    <LoadingCircle />
  </div>
);

export default ImageLoader;
