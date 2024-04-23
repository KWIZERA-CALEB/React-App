import Button from './Button.jsx'
import Header from './Header.jsx'
import LeftBanner from './LeftBanner.jsx'
import RightBanner from './RightBanner.jsx'
import Navigation from './Navigation.jsx'

function App() {
    return (
      <>
        <Header>
          <Navigation />
          <LeftBanner />
          <RightBanner />
        </Header>
      </>
    )
}

export default App
