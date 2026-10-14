
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';

const Logo = ({ disabledLink = false, sx }) => {
    const logoImage = (
        <Box
            component="img"
            src="/logo.png"
            alt="HNK Movie Logo"
            sx={{
                display: 'block',
                width: 40,
                height: 40,
                objectFit: 'contain',
                ...sx,
            }}
        />
    );

    if (disabledLink) {
        return logoImage;
    }

    return (
        <RouterLink
            to="/"
            style={{
                display: 'inline-flex',
                textDecoration: 'none',
            }}
        >
            {logoImage}
        </RouterLink>
    );
};

export default Logo;
