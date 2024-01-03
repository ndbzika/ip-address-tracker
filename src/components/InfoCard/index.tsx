import { Container, Divider, Item } from "./style"

export const InfoCard = () => {
    return (
        <Container>
            <Item>
                <p>IP ADDRESS</p>
                <span>38.0.101.76</span>
            </Item>
            <Divider/>
            <Item>
                <p>LOCATION</p>
                <span>Brooklyn, NY 10001</span>
            </Item>
            <Divider/>
            <Item>
                <p>TIMEZONE</p>
                <span>UTC -05:00</span>
            </Item>
            <Divider/>
            <Item>
                <p>ISP</p>
                <span>SpaceX Starlink</span>
            </Item>
        </Container>
    )
}
