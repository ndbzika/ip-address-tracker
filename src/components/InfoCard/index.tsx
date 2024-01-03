import { IpInfo } from "../../models/IpInfo"
import { Container, Divider, Item } from "./style"

export const InfoCard = ({query = '0.0.0.0', city = 'City', region = 'Region', postal = 'Postal', timezone = 'UTC', isp = 'ISP'}: IpInfo) => {
    return (
        <Container>
            <Item>
                <p>IP ADDRESS</p>
                <span>{query}</span>
            </Item>
            <Divider/>
            <Item>
                <p>LOCATION</p>
                <span>{city}, {region} {postal}</span>
            </Item>
            <Divider/>
            <Item>
                <p>TIMEZONE</p>
                <span>{timezone}</span>
            </Item>
            <Divider/>
            <Item>
                <p>ISP</p>
                <span>{isp}</span>
            </Item>
        </Container>
    )
}
