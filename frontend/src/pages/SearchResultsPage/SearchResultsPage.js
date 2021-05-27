import React from 'react'

// Components
import ResultsSection from 'pages/SearchResultsPage/ResultsSection'
import OptionsSection from 'pages/SearchResultsPage/OptionsSection'

// Hooks
import useGetExpanded from 'hooks/useGetExpanded'

const SearchResultsPage = () => {
  const [currentExpanded, handleExpanded, closeAllExpanded] = useGetExpanded()

  return (
    <>
      <OptionsSection
        expandedMenu={currentExpanded}
        handleExpandMenu={handleExpanded}
        handleCloseMenus={closeAllExpanded}
      />
      <ResultsSection expandedMenu={currentExpanded} />
    </>
  )
}

export default SearchResultsPage
