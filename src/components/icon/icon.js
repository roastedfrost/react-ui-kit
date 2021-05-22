import React from 'react';
import PropTypes from 'prop-types';

const icons = new Map();
const context = require.context('../../assets/svg', false, /.svg/);

context.keys().forEach((key) => {
  const icon = context(key).default;
  const [, , widthStr, heightStr] = icon.viewBox.split(' ');
  icons.set(icon.id, {
    id: icon.id,
    width: parseInt(widthStr),
    height: parseInt(heightStr)
  });
});

export function Icon({ name, width, height }) {
  const icon = icons.get(name);
  const w = width ?? icon.width;
  const h = height ?? icon.height;
  return (
    <svg viewBox={icon.viewBox} width={w} height={h} role='img'>
      <use xlinkHref={'#' + icon.id} />
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};
