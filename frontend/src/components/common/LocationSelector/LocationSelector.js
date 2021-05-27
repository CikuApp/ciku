import React, { useState, useRef } from 'react'
import { useRecoilState } from 'recoil'

// States
import locationAtom from 'recoil/location'

// Hooks
import useClickOutside from 'hooks/useClickOutside'
import useExpandable from 'hooks/useExpandable'

// Components
import {
  Text,
  TextPill,
  TextPillExpanded,
  ExpandIcon,
  ListItem,
} from 'components/atoms'

// Utils
import { formatStateName } from 'utils/dataHelpers'

// Data
import stateNames from 'data/stateNames'

const LocationSelector = () => {
  const [location, setLocation] = useRecoilState(locationAtom)
  const locationSelectorRef = useRef()
  const [isExpanded, toggleExpanded, closeExpanded] = useExpandable()
  useClickOutside(locationSelectorRef, closeExpanded)

  const handleLocationSelection = (value) => {
    if (value !== 'Select A State') {
      setLocation(value)
      closeExpanded()
    }
  }

  return (
    <span className="z-40 mr-6 cursor-pointer" ref={locationSelectorRef}>
      <TextPill type="md" onClick={toggleExpanded}>
        <Text type="xs">
          {location.length ? formatStateName(location) : 'Select A State'}
        </Text>
        <ExpandIcon />
      </TextPill>
      {isExpanded && (
        <TextPillExpanded>
          <ul>
            {stateNames.map((name) => {
              return (
                <ListItem
                  onClick={() => handleLocationSelection(name)}
                  key={name}
                >
                  <Text type="xs">{formatStateName(name)}</Text>
                </ListItem>
              )
            })}
          </ul>
        </TextPillExpanded>
      )}
    </span>
  )
}

export default LocationSelector
