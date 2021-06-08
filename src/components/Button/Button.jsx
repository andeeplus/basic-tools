import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'src/components/Spinner';
import Icon from 'src/components/Icon';
import Text from 'src/components/Text';
import { InnerButton } from './style';

const Button = forwardRef(
  ({ as = 'button', icon, onClick, children, disabled, loading, ...props }, ref) => {
    const buttonContent = useMemo(() => {
      if (loading) return <Spinner size={18} color="gray.2" />;
      if (icon) return <Icon icon={icon} fill="gray.0" />;
      return children;
    }, [children, icon, loading]);

    return (
      <InnerButton
        as={as}
        ref={ref}
        onClick={onClick}
        disabled={disabled || loading}
        {...props}
      >
        {buttonContent}
      </InnerButton>
    );
  }
);

Button.defaultProps = {
  variant: 'primary',
  shape: 'default.md',
  fontFamily: 'normal',
  fontWeight: 500,
  cursor: 'pointer'
};

Button.displayName = 'Button';

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  loading: PropTypes.bool,
  icon: PropTypes.string
};

export default Button;
