
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright(props: any) {
    return (
      <Typography sx={{my:'auto', fontSize:'12px', fontWeight:700, color: '#1F2633' }}  align="right" {...props}>
        {' '}
        {new Date().getFullYear()}
        {' '}
        {' © '}
        <Link href="https://mayzor.net/" underline="none" color="black">
         Adminto theme by Mayzor
        </Link>
      </Typography>
    );
  }

  export default function Footer() {
    return (
     
        <Box
          component="footer"
          sx={{
            py: 1,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
            <Copyright />

        </Box>
    );
  }