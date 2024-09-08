import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import { alpha } from '@mui/material/styles';
import { Stack } from '@mui/material';
import AppNavbar from '@/components/AppNavbar';

export default function Home() {
  return (
    <Box display="flex">
      <SideMenu />
      <AppNavbar />
      <Box
        component="main"
        sx={{
          backgroundColor: 'bg.highest',
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Stack
              spacing={2}
              sx={{
                alignItems: 'center',
                mx: 3,
                pb: 10,
                mt: { xs: 8, md: 0 },
              }}
            >
          <Header />
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI - Next.js App Router example in TypeScript
          </Typography>
          <Link href="/about" color="secondary" component={NextLink}>
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Stack>
      </Box>
    </Box>
  );
}
