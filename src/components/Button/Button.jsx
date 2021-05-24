import React, { forwardRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import Spinner from 'src/components/Spinner'
import { InnerButton } from './style'
import Icon from 'src/components/Icon'
import Text from 'src/components/Text'

const Button = forwardRef(
  (
    {
      as = 'button',
      icon,
      variant = 'filled',
      onClick,
      children,
      disabled,
      loading,
      mainColor,
      ...props
    },
    ref,
  ) => {
    const buttonContent = useMemo(() => {
      if (loading) return <Spinner size={18} color="gray.2" />
      if (icon) return <Icon icon={icon} size={18} fill="gray.0" />
      return <Text variant="p">{children}</Text>
    }, [children, icon, loading])

    return (
      <InnerButton
        as={as}
        ref={ref}
        variant={variant}
        mainColor={mainColor}
        onClick={onClick}
        disabled={disabled || loading}
        {...props}
      >
        {buttonContent}
      </InnerButton>
    )
  },
)

Button.defaultProps = {
  variant: 'filled',
  bg: 'black',
  color: 'white',
}

Button.displayName = 'Button'

Button.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  loading: PropTypes.bool,
  icon: PropTypes.string,
}

export default Button
