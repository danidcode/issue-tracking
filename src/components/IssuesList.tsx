import { Box } from "@mui/material";
import { useIssues } from "../hooks/useIssues";
import IssueCard from "./IssueCard";

const IssuesList = () => {
    const { issues } = useIssues()


    return (
        <Box>
            {
                issues?.map((issue) => (
                    <Box key={issue.id}>
                        <IssueCard issue={issue} />
                    </Box>
                ))
            }
        </Box>
    )
}

export default IssuesList