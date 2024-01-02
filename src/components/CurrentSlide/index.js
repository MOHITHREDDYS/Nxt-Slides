import SlidesContext from '../../Context/slidesContext'

import './index.css'

const CurrentSlide = () => (
  <SlidesContext.Consumer>
    {value => {
      const {activeId, slidesList, updateHeading, updateDescription} = value
      const activeSlide = slidesList.filter(
        eachSlide => eachSlide.id === activeId,
      )[0]
      const {heading, description} = activeSlide

      const onChangingHeading = event => {
        updateHeading(event.target.value)
      }

      const onChangingDescription = event => {
        updateDescription(event.target.value)
      }

      return (
        <div className="current-slide-container">
          <div className="current-slide-container-2">
            <input
              type="text"
              value={heading}
              className="current-slide-heading"
              onChange={onChangingHeading}
            />
            <br />
            <input
              type="text"
              value={description}
              className="current-slide-description"
              onChange={onChangingDescription}
            />
          </div>
        </div>
      )
    }}
  </SlidesContext.Consumer>
)

export default CurrentSlide
