import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ContentLayout = ({ header, body, footer }) => (
  <div className="ContentLayout">
    {header && <div className="ContentLayout__header">{header}</div>}
    {body && <div className="ContentLayout__body">{body}</div>}
    {footer && <div className="ContentLayout__footer">{footer}</div>}
  </div>
);

ContentLayout.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
};

export default ContentLayout;
