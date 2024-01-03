import {FaChevronRight} from 'react-icons/fa'
import { Container, SearchContainer, InputContainer } from './style'
import { InfoCard } from './components/InfoCard'
import { Map } from './components/Map'

function App() {
  return (
    <Container>
      <SearchContainer>
        <h1>IP Address Tracker</h1>

        <InputContainer>
          <input type="text" placeholder='Search for any IP address or domain'/>
          <button>
            <FaChevronRight
              style={{color: '#fff', width: '1rem', height: '1rem', textAlign: 'center'}}
            />
            </button>
        </InputContainer>

        <InfoCard/>
      </SearchContainer>


      <Map/>
    </Container>
  )
}

export default App
