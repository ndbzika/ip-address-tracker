import {FaChevronRight} from 'react-icons/fa'
import { Container, InputContainer } from './style'

function App() {
  return (
    <Container>
      <h1>IP Address Tracker</h1>

      <InputContainer>
        <input type="text" placeholder='Search for any IP address or domain'/>
        <button><FaChevronRight style={{color: '#fff', width: '1rem', height: '1rem', textAlign: 'center'}}/></button>
      </InputContainer>

      {/* component de dados de ip */}

      {/* mapa */}
    </Container>
  )
}

export default App
