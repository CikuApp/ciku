import React, { useState } from "react";
import { useRecoilState } from "recoil";

// States
import searchTagsAtom from "recoil/searchTags";

// Components
import { DropdownMenu, Checkbox, Text } from "components/Presentation";

// Data
import { tags } from "data/data";

function SearchResultsFilter() {
  const [expandedMenu, setExpandedMenu] = useState("");
  const [searchTags, setSearchTags] = useRecoilState(searchTagsAtom);

  const handleOptionClick = (tag) => {
    setSearchTags((prevState) => {
      if (prevState.includes(tag)) {
        return prevState.filter((item) => item !== tag);
      } else {
        return [...prevState, tag];
      }
    });
  };

  const isInSearchTags = (tag) => {
    if (searchTags.includes(tag)) {
      return true;
    } else {
      return false;
    }
  };

  const isExpanded = (tagName) => {
    return expandedMenu === tagName;
  };

  const handleExpandMenu = (tagName) => {
    setExpandedMenu((prevState) => (prevState === tagName ? "" : tagName));
  };

  return (
    <section className="h-14 w-full bg-gray-300 flex justify-center">
      <div className="w-9/12 flex">
        {tags.map((tag) => {
          return (
            <DropdownMenu
              selectorName={tag.tagName}
              isExpanded={isExpanded(tag.tagName)}
              handleExpand={() => handleExpandMenu(tag.tagName)}
              key={tag}
            >
              {tag.tagOptions.map((option) => {
                return (
                  <li className="flex items-center my-4" key={option}>
                    <Checkbox
                      value={option.value}
                      checked={isInSearchTags(option.value)}
                      handleClick={() => handleOptionClick(option.value)}
                      className="mr-8 mb-0.5"
                    />
                    <Text type="small">{option.name}</Text>
                  </li>
                );
              })}
            </DropdownMenu>
          );
        })}
      </div>
    </section>
  );
}

export default SearchResultsFilter;
