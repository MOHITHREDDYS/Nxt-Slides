import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import Navbar from './components/Navbar'

import './App.css'
import SlidesContent from './components/SlidesContent'
import SlidesContext from './Context/slidesContext'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
// const App = () => <div>Hello World</div>

class App extends Component {
  state = {
    slidesList: initialSlidesList,
    activeId: initialSlidesList[0].id,
  }

  updateActiveId = idValue => {
    this.setState({activeId: idValue})
  }

  updateHeading = headingValue => {
    const {slidesList, activeId} = this.state

    const updatedSlidesList = slidesList.map(eachSlide => {
      if (eachSlide.id === activeId) {
        return {
          id: eachSlide.id,
          heading: headingValue,
          description: eachSlide.description,
        }
      }
      return eachSlide
    })

    this.setState({slidesList: updatedSlidesList})
  }

  updateDescription = descriptionValue => {
    const {slidesList, activeId} = this.state

    const updatedSlidesList = slidesList.map(eachSlide => {
      if (eachSlide.id === activeId) {
        return {
          id: eachSlide.id,
          heading: eachSlide.heading,
          description: descriptionValue,
        }
      }
      return eachSlide
    })

    this.setState({slidesList: updatedSlidesList})
  }

  updateSlidesList = () => {
    const {activeId, slidesList} = this.state
    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }

    const indexValue = slidesList.findIndex(
      eachSlide => eachSlide.id === activeId,
    )
    const a = slidesList.slice(0, indexValue + 1)
    const b = slidesList.slice(indexValue + 1, slidesList.length)
    const updatedSlidesList = [...a, newSlide, ...b]
    this.setState({
      slidesList: updatedSlidesList,
      activeId: newSlide.id,
    })
  }

  render() {
    const {slidesList, activeId} = this.state
    return (
      <SlidesContext.Provider
        value={{
          slidesList,
          activeId,
          updateActiveId: this.updateActiveId,
          updateHeading: this.updateHeading,
          updateDescription: this.updateDescription,
          updateSlidesList: this.updateSlidesList,
        }}
      >
        <div className="app-container">
          <Navbar />
          <SlidesContent />
        </div>
      </SlidesContext.Provider>
    )
  }
}

export default App
