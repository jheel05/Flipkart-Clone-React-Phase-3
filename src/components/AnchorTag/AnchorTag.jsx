
import PropTypes from 'prop-types';

const Anchor = ({ href, target, className, children }) => {
  return (
    <a href={href} target={target} className={className}>
      {children}
    </a>
  );
};

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Anchor;
