import React, { useRef, useEffect, createRef } from 'react'
import { useRecoilState } from 'recoil'

// States
import searchTagsAtom from 'recoil/searchTags'

// Hooks
import useClickOutsideArray from 'hooks/useClickOutsideArray'

// Components
import { Checkbox, Text, DropdownMenu, ListItem2 } from 'components/atoms'

// Data
import tags from 'data/tags'

const SearchResultsFilter = ({
  expandedMenu,
  handleExpandMenu,
  handleCloseMenus,
}) => {
  const [searchTags, setSearchTags] = useRecoilState(searchTagsAtom)
  const dropdownMenusRef = useRef(tags.map(() => createRef()))
  useClickOutsideArray(dropdownMenusRef, handleCloseMenus)

  const handleOptionClick = (tag) => {
    setSearchTags((prevState) => {
      if (prevState.includes(tag)) {
        return prevState.filter((item) => item !== tag)
      } else {
        return [...prevState, tag]
      }
    })
  }

  const isInSearchTags = (tag) => {
    if (searchTags.includes(tag)) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="flex -ml-8">
      {tags.slice(0, tags.length - 1).map((tag, index) => {
        return (
          <DropdownMenu
            selectorName={tag.tagName}
            isExpanded={expandedMenu === tag.tagName}
            handleExpand={() => handleExpandMenu(tag.tagName)}
            key={tag.tagName}
            ref={dropdownMenusRef.current[index]}
          >
            <ul className="space-y-4 w-80">
              {tag.tagOptions.map((option) => {
                return (
                  <ListItem2 key={option.value}>
                    <Checkbox
                      value={option.value}
                      checked={isInSearchTags(option.value)}
                      onClick={() => handleOptionClick(option.value)}
                    />
                    <Text type="sm">{option.name}</Text>
                  </ListItem2>
                )
              })}
            </ul>
          </DropdownMenu>
        )
      })}
      <DropdownMenu
        selectorName={tags[tags.length - 1].tagName}
        isExpanded={expandedMenu === tags[tags.length - 1].tagName}
        handleExpand={() => handleExpandMenu(tags[tags.length - 1].tagName)}
        key={tags[tags.length - 1].tagName}
        ref={dropdownMenusRef.current[tags.length - 1]}
      >
        <div className="h-112 w-200 flex flex-col flex-wrap">
          {tags[tags.length - 1].tagOptions.map((option) => {
            return (
              <div className="w-1/2 my-1" key={option.value}>
                <ListItem2>
                  <Checkbox
                    value={option.value}
                    checked={isInSearchTags(option.value)}
                    onClick={() => handleOptionClick(option.value)}
                  />
                  <Text type="sm">{option.name}</Text>
                </ListItem2>
              </div>
            )
          })}
        </div>
      </DropdownMenu>
    </div>
  )
}

export default SearchResultsFilter
