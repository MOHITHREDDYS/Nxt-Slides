import './index.css'
import SlidesContext from '../../Context/slidesContext'

const SlidesPanel = () => (
  <SlidesContext.Consumer>
    {value => {
      const {slidesList, activeId, updateActiveId} = value

      return (
        <ol>
          {slidesList.map(eachSlide => {
            const {id, heading, description} = eachSlide
            const isActive = id === activeId

            const onClickingSlide = () => {
              updateActiveId(id)
            }

            return isActive ? (
              <div
                role="button"
                tabIndex={0}
                key={id}
                className="each-slide-container each-slide-container-condition"
                onClick={onClickingSlide}
              >
                <li key={id}>
                  <div className="each-slide-container-2">
                    <h1 className="each-slide-heading">{heading}</h1>
                    <p className="each-slide-description">{description}</p>
                  </div>
                </li>
              </div>
            ) : (
              <div
                role="button"
                tabIndex={0}
                onClick={onClickingSlide}
                key={id}
                className="each-slide-container"
              >
                <li key={id}>
                  <div className="each-slide-container-2">
                    <h1 className="each-slide-heading">{heading}</h1>
                    <p className="each-slide-description">{description}</p>
                  </div>
                </li>
              </div>
            )
          })}
        </ol>
      )
    }}
  </SlidesContext.Consumer>
)

export default SlidesPanel
