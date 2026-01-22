import React from 'react';
import { Box, Typography, Grid, Container, Button, Paper } from '@mui/material';

// Import desired icons from Material-UI
import LanIcon from '@mui/icons-material/Lan';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

// --- DATA for the 5i Framework (Unchanged) ---
const frameworkItems = [
  {
    icon: <LanIcon color="primary" sx={{ fontSize: 32 }} />, // CHANGE: Increased icon size
    title: "Industry",
    description: "Connecting students with real-world industry challenges and opportunities."
  },
  {
    icon: <AccountBalanceIcon sx={{ color: '#E67E22', fontSize: 32 }} />, // CHANGE: Increased icon size
    title: "Institution",
    description: "Strengthening educational foundations through academic partnerships."
  },
  {
    icon: <RocketLaunchIcon sx={{ color: '#2ECC71', fontSize: 32 }} />, // CHANGE: Increased icon size
    title: "Incubation",
    description: "Nurturing innovative ideas into successful ventures and startups."
  },
  {
    icon: <EmojiObjectsIcon sx={{ color: '#9B59B6', fontSize: 32 }} />, // CHANGE: Increased icon size
    title: "Innovation",
    description: "Fostering creative thinking and breakthrough technological solutions."
  },
  {
    icon: <WorkOutlineIcon sx={{ color: '#3498DB', fontSize: 32 }} />, // CHANGE: Increased icon size
    title: "Internship",
    description: "Providing hands-on experience through structured internship programs."
  },
];


const Aakam = () => {
  return (
    <>
      {/* === TOP CTA BAR (Unchanged) === */}
      <Box sx={{ bgcolor: '#00205B', py: 1 }}>
        <Container maxWidth="xl" sx={{  // CHANGE: Increased maxWidth to "xl"
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-between' },
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2
        }}>
          <Typography variant="h2" sx={{ color: 'white', fontWeight: '600', fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Transform Your Future Now
          </Typography>
          <Button
            variant="contained"
            // --- MODIFICATION START ---
            href="https://www.aakam360.com"
            target="_blank"
            rel="noopener noreferrer"
            // --- MODIFICATION END ---
            sx={{
              bgcolor: '#FFC107',
              color: '#00205B',
              fontWeight: 'bold',
              fontSize: '1rem',
              px: 5,
              py: 1.5,
              borderRadius: '8px',
              '&:hover': {
                bgcolor: '#ffb300'
              }
            }}
          >
            Apply Now
          </Button>
        </Container>
      </Box>

      {/* === MAIN CONTENT SECTION === */}
      <Box sx={{ py: { xs: 6, md: 2 }, bgcolor: '#f8f9fa' }}> {/* CHANGE: Increased vertical padding */}
        <Container maxWidth="xl"> {/* CHANGE: Increased maxWidth to "xl" for a wider layout */}
          <Typography variant="h1" sx={{ textAlign: 'center', color: 'text.primary', fontSize: { xs: '2.4rem', md: '3.15rem' } }}> {/* CHANGE: Increased font size */}
            Beyond Education
          </Typography>
          <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#00205B', mb: 3, fontSize: { xs: '1rem', md: '3.35rem' } }}> {/* CHANGE: Increased font size and margin */}
            Aakam360 Innovation Ecosystem
          </Typography>

          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, sm: 5, md: 1 }, // CHANGE: Increased internal padding
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            {/* Decorative Dots */}
            <Box sx={{ position: 'absolute', top: 30, right: 30, width: 18, height: 18, borderRadius: '50%', bgcolor: '#66a6ff' }} />
            <Box sx={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', width: 14, height: 14, borderRadius: '50%', bgcolor: '#a8e063' }} />


            <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center"> {/* CHANGE: Increased spacing */}
              {/* --- Left Column --- */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h5" color="#00205B" sx={{ mb: 1 }}> {/* CHANGE: Increased variant */}
                  About Aakam360
                </Typography>
                <Typography component="h3" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 3, fontSize: { xs: '2rem', md: '3.2.5rem' }, lineHeight: 1.2 }}> {/* CHANGE: Increased font size and line height */}
                  <Box component="span" sx={{ color: '#20c997' }}>Transforming</Box> Education & Industry
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ mb: 5, lineHeight: 1.8, fontSize: '1.4.5rem' }}> {/* CHANGE: Increased font size and line height */}
                  At Aakam360, we believe in the power of bridging the gap between academic excellence and industry innovation. Our comprehensive 5i Framework ensures holistic development for the next generation of leaders.
                </Typography>

                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '16px', p: 3, textAlign: 'center', height: '100%' }}>
                      <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#00205B', fontSize: '2rem' }}>360°</Typography> {/* CHANGE: Increased variant */}
                      <Typography color="text.secondary" variant="body1" sx={{ fontSize: '1.6rem' }}>Complete Ecosystem</Typography> {/* CHANGE: Increased variant */}
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '16px', p: 3, textAlign: 'center', height: '100%' }}>
                      <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#00205B',fontSize: '2rem' }}>24/7</Typography> {/* CHANGE: Increased variant */}
                      <Typography color="text.secondary" variant="body1" sx={{ fontSize: '1.6rem' }}>Continuous Support</Typography> {/* CHANGE: Increased variant */}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              {/* --- Right Column --- */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ bgcolor: '#FFFFFF', p: { xs: 3, sm: 5 }, borderRadius: '20px', border: '1px solid #e9ecef' }}> {/* CHANGE: Adjusted background and padding */}
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00205B', mb: 4, fontSize: '1.5rem'}}> {/* CHANGE: Increased variant */}
                    Our 5i Framework
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}> {/* CHANGE: Increased gap */}
                    {frameworkItems.map((item) => (
                      <Box key={item.title} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                        <Box sx={{ mt: '4px' }}>{item.icon}</Box>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{item.title}</Typography> {/* CHANGE: Increased font size */}
                          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem' }}>{item.description}</Typography> {/* CHANGE: Increased variant */}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>

        </Container>
      </Box>
    </>
  );
};

export default Aakam;