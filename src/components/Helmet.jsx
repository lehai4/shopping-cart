import PropTypes from "prop-types";
import React, { useEffect } from "react";

const Helmet = (props) => {
  document.title = "Shopping cart - " + props.title;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{props.children}</>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
