import React from "react";
import '../../../loader.css';

const Loader = ({
  type = 'inline',
}) => {
  const getLoaderTypeId = () => {
    try {
      const types = {
        'inline': 'inline-loader',
        'partial': 'loader-partial',
        'full': 'loader'
      };
  
      return types[type];
    } catch (e) {
      console.error(e);
    }
  }

  return <div id={getLoaderTypeId()} ></div>
}

export default Loader;