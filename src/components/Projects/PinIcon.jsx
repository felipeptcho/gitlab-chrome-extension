import React, { PropTypes } from 'react'
import { Icon } from 'semantic-ui-react'
import curry from 'lodash/fp/curry'
import cn from 'classnames'
import './PinIcon.styl'

const stopPropagation = curry((callback, evt) => {
  evt.stopPropagation()
  callback(evt)
})

const PinIcon = ({ active, onClick }) => (
  <Icon className={cn('PinIcon', { active })} name='pin' onClick={stopPropagation(onClick)}/>
)

PinIcon.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func
}

PinIcon.defaultProps = {
  onClick: () => 1
}

export default PinIcon
