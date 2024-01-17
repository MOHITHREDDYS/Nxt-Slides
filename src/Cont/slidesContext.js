import React from 'react'

const SlidesContext = React.createContext({
  slidesList: [],
  activeId: '',
  updateActiveId: () => {},
  updateHeading: () => {},
  updateDescription: () => {},
  updateSlidesList: () => {},
})

export default SlidesContext
