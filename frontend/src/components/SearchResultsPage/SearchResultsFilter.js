import React, { useRef, useEffect, createRef } from "react";
import { useRecoilState } from "recoil";

// States
import searchTagsAtom from "recoil/searchTags";

// Components
import { DropdownMenu, Checkbox, Text } from "components/Presentation";

// Data
import { tags } from "data/data";

const SearchResultsFilter = ({ handleExpandMenu, expandedMenu }) => {
  const [searchTags, setSearchTags] = useRecoilState(searchTagsAtom);
  const dropdownMenusRef = useRef(tags.map((tag) => createRef()));

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const handleOptionClick = (tag) => {
    setSearchTags((prevState) => {
      if (prevState.includes(tag)) {
        return prevState.filter((item) => item !== tag);
      } else {
        return [...prevState, tag];
      }
    });
  };

  const handleClick = (e) => {
    if (
      dropdownMenusRef.current.length &&
      !dropdownMenusRef.current.some(
        (item) => item.current && item.current.contains(e.target)
      )
    ) {
      handleExpandMenu("");
    }
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

  return (
    <section className="h-16 w-full flex justify-start align-center mt-14">
      <div className="flex -ml-8">
        {tags.slice(0, tags.length - 1).map((tag, index) => {
          return (
            <DropdownMenu
              selectorName={tag.tagName}
              isExpanded={isExpanded(tag.tagName)}
              handleExpand={() => handleExpandMenu(tag.tagName)}
              key={tag.tagName}
              ref={dropdownMenusRef.current[index]}
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
          ref={dropdownMenusRef.current[tags.length - 1]}
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
};

export default SearchResultsFilter;
