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
    <section className="h-16 w-full bg-gray-300 flex justify-start align-center">
      <div className="max-w-screen-xl mx-48 2xl:mx-auto flex">
        {tags.map((tag) => {
          return (
            <DropdownMenu
              selectorName={tag.tagName}
              isExpanded={isExpanded(tag.tagName)}
              handleExpand={() => handleExpandMenu(tag.tagName)}
              key={tag.tagName}
            >
              {tag.tagOptions.map((option) => {
                return (
                  <li className="flex items-center my-8" key={option.value}>
                    <Checkbox
                      value={option.value}
                      checked={isInSearchTags(option.value)}
                      handleClick={() => handleOptionClick(option.value)}
                      className="mr-8 mb-1"
                    />
                    <Text type="p">{option.name}</Text>
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
