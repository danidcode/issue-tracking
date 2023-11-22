import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Issue } from '../interfaces/Issue';

type Props = {
    issue: Issue
}
const IssueCard = ({ issue }: Props) => {

    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {issue.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Show details</Button>
            </CardActions>
        </Card>
    )
}

export default IssueCard