import {Link as RouterLink} from 'react-router-dom';
import {Box, Typography, Button, Container} from '@mui/material';

const NotFoundPage = () => {
    return (
        <Container>
            <Box textAlign="center" mt={4}>
                <Typography variant="h1" component="h1">
                    404
                </Typography>
                <Typography variant="h6" component="h6">
                    The page you are looking for does not exist.
                </Typography>
                <Button variant="contained" component={RouterLink} to="/">
                    Go Home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFoundPage;
