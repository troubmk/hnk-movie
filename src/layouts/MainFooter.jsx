import {Link, Typography} from '@mui/material';

const MainFooter = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5, mb: 3 }}>
            {'© '}
            <Link color="inherit" href="https://your-website.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

export default MainFooter;