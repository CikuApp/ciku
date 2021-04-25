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
    <section className="h-16 w-full flex justify-start align-center mt-14">
      <div className="relative flex -ml-8">
        {tags.slice(0, tags.length - 1).map((tag) => {
          return (
            <DropdownMenu
              selectorName={tag.tagName}
              isExpanded={isExpanded(tag.tagName)}
              handleExpand={() => handleExpandMenu(tag.tagName)}
              key={tag.tagName}
            >
              <div className="w-72">
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
              </div>
            </DropdownMenu>
          );
        })}
        <DropdownMenu
          selectorName={tags[tags.length - 1].tagName}
          isExpanded={isExpanded(tags[tags.length - 1].tagName)}
          handleExpand={() => handleExpandMenu(tags[tags.length - 1].tagName)}
          key={tags[tags.length - 1].tagName}
        >
          <div className="h-200 w-200 flex flex-col flex-wrap py-4">
            {tags[tags.length - 1].tagOptions.map((option) => {
              return (
                <li className="flex items-center my-4 mr-4" key={option.value}>
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
          </div>
        </DropdownMenu>
      </div>
    </section>
  );
}

export default SearchResultsFilter;
