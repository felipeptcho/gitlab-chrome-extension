import React, { PropTypes, PureComponent } from 'react'
import { Dropdown, Icon, Image, Input } from 'semantic-ui-react'
import Search from './Search'
import './TopBar.styl'

class TopBar extends PureComponent {
  render () {
    const { imageUrl, searching, onDropdownClick } = this.props
    const DropdownTrigger = (
      <span>
        <Image
          avatar
          src={imageUrl}
        />
      </span>
    )
    const dropdownOptions = [
      { id: 'profile', text: 'Profile' },
      { id: 'settings', text: 'Settings' },
    ]

    return (
      <div className='App__TopBar'>
        <div className='App__TopBar_Content'>
          <Search
            loading={searching}
            onSearch={this.props.onSearch}
          />
          <Dropdown trigger={DropdownTrigger}>
            <Dropdown.Menu>
              {dropdownOptions.map((opt, i) =>
                <Dropdown.Item
                  {...opt}
                  key={i}
                  onClick={onDropdownClick}
                />
              )}
              <Dropdown.Divider />
              <Dropdown.Item
                id='removeToken'
                text='Remove Token'
                onClick={onDropdownClick}
              />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    )
  }
}

TopBar.propTypes = {
  imageUrl: PropTypes.string,
  searching: PropTypes.bool,
  onDropdownClick: PropTypes.func,
  onSearch: PropTypes.func
}

export default TopBar
