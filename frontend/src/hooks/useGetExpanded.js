import React, { useState } from 'react'

const useGetExpanded = () => {
  const [currentExpanded, setCurrentExpanded] = useState('')

  const handleExpanded = (name) => {
    setCurrentExpanded((prevState) => (prevState === name ? '' : name))
  }

  const closeAllExpanded = () => {
    setCurrentExpanded('')
  }

  return [currentExpanded, handleExpanded, closeAllExpanded]
}

export default useGetExpanded
