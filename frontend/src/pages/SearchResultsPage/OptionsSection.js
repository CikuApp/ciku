import React from 'react'
import PropTypes from 'prop-types'

// Components
import SearchResultsFilter from 'pages/SearchResultsPage/SearchResultsFilter'
import SearchIngredientsWrapper from 'pages/SearchResultsPage/SearchIngredientsWrapper'
import AddSearchIngredients from 'pages/SearchResultsPage/AddSearchIngredients'
import SustainabilityScoreTooltip from 'pages/SearchResultsPage/SustainabilityScoreTooltip'
import LocationSelector from 'components/common/LocationSelector'
import { PageBarContainer } from 'components/templates'
import { Text, Heading } from 'components/atoms'

const OptionsSection = ({
  expandedMenu,
  handleExpandMenu,
  handleCloseMenus,
}) => {
  return (
    <>
      <PageBarContainer displayClasses="items-center space-x-4">
        <Text type="sm">Currently showing recipes for seasonal produce in</Text>
        <LocationSelector />
      </PageBarContainer>
      <PageBarContainer displayClasses="items-end pt-4">
        <div className="flex items-baseline space-x-20">
          <Heading type="h2">Recipe Results</Heading>
          <span className="flex">
            <Text type="xs">What's a </Text>
            <SustainabilityScoreTooltip title="Sustainability Score" />
            <Text type="p">?</Text>
          </span>
        </div>
      </PageBarContainer>
      <PageBarContainer displayClasses="items-start">
        <AddSearchIngredients />
        <SearchIngredientsWrapper />
      </PageBarContainer>
      <PageBarContainer displayClasses="items-start">
        <SearchResultsFilter
          expandedMenu={expandedMenu}
          handleExpandMenu={handleExpandMenu}
          handleCloseMenus={handleCloseMenus}
        />
      </PageBarContainer>
    </>
  )
}

export default OptionsSection

OptionsSection.propTypes = {
  expandedMenu: PropTypes.string,
}
