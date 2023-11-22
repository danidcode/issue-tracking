import { Container } from "@mui/material"
import Header from "./Header"
import IssuesList from "./IssuesList"

const MainContent = () => {
    return (
        <>
            <Header />
            <Container>
                <IssuesList />
            </Container>
        </>

    )
}

export default MainContent