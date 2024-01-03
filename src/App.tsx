import {FaChevronRight} from 'react-icons/fa'
import { Container, SearchContainer, InputContainer } from './style'
import { InfoCard } from './components/InfoCard'
import { Map } from './components/Map'
import { useEffect, useRef, useState } from 'react'
import { getIp } from './services/getIp'
import { IpGeoLocation, IpInfo } from './models/IpInfo'


function App() {
  const [infos, setInfos] = useState<IpInfo>({query: '0.0.0.0', city: 'City', region: 'Region', postal: 'Postal', timezone: 'UTC', isp: 'ISP'})
  const [location, setLocation] = useState<IpGeoLocation | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    getIp().then((ip) => {
      setInfos({query: ip.query, city: ip.city, region: ip.region, postal: ip.postal, timezone: ip.timezone, isp: ip.isp})
      setLocation({lat: ip.lat, lon: ip.lon})
      if (inputRef.current) {
        inputRef.current.value = ip.query
      }
    })
  }, [])

  const handleSearch = () => {
    if (inputRef.current) {
      getIp(inputRef.current.value).then((ip) => {
        setInfos({query: ip.query, city: ip.city, region: ip.region, postal: ip.postal, timezone: ip.timezone, isp: ip.isp})
        setLocation({lat: ip.lat, lon: ip.lon})
      })
    }
  }

  return (
    <Container>
      <SearchContainer>
        <h1>IP Address Tracker</h1>

        <InputContainer>
          <input type="text" placeholder='Search for any IP address or domain' ref={inputRef}/>
          <button onClick={handleSearch}>
            <FaChevronRight
              style={{color: '#fff', width: '1rem', height: '1rem', textAlign: 'center'}}
            />
            </button>
        </InputContainer>

        <InfoCard query={infos.query} city={infos.city} region={infos.region} postal={infos.postal} timezone={infos.timezone} isp={infos.isp}/>
      </SearchContainer>


      {location && <Map lat={location.lat} lon={location.lon}/>}
    </Container>
  )
}

export default App
