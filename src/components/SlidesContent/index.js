import './index.css'
import SlidesPanel from '../SlidesPanel'
import CurrentSlide from '../CurrentSlide'
import SlidesContext from '../../Context/slidesContext'

const SlidesContent = () => (
  <SlidesContext.Consumer>
    {value => {
      const {updateSlidesList} = value

      const onClickingNewButton = () => {
        updateSlidesList()
      }

      return (
        <div className="content-container">
          {/* Adding a New Button */}
          <button
            type="button"
            className="new-button"
            onClick={onClickingNewButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon"
            />
            <span className="new-word">New</span>
          </button>

          <div className="panel-and-current-slide-container">
            <SlidesPanel />
            <CurrentSlide />
          </div>
        </div>
      )
    }}
  </SlidesContext.Consumer>
)

export default SlidesContent
