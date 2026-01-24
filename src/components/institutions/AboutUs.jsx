"use client"; // This MUST be the first line

import React from "react";
import { 
  Box, 
  Container, 
  Stack,
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Divider 
} from "@mui/material";
import Header from "@/components/institutions/header-3"; // Ensure consistent header
import Footer from "@/components/institutions/footer";   // Ensure consistent footer
const AboutUs = () => {
  return (
    <>
      <Header />
      <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
        {/* === HERO SECTION === */}
        <Box
          sx={{
            position: "relative",
            height: { xs: "250px", md: "350px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundImage: `url('/assets/images/SMG_4399-01.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 32, 91, 0.85)",
              zIndex: 1,
            },
          }}
        >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.2rem", md: "4rem" },
              mt: 6,

            }}
          >
            About Our Institution
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: "800px", mx: "auto",fontSize: { xs: "1rem", md: "1.5rem" }, mt: 2 }}>
            Nurturing excellence since 2010, Sri Shanmugha Educational Institutions is dedicated to 
            empowering the next generation of leaders through innovation and value-based education.
          </Typography>
        </Container>
      </Box>

<Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
  <Stack 
    direction={{ xs: 'column', md: 'row' }} // Switch to row on medium screens+
    spacing={{ xs: 4, md: 8,lg: 16 }}              // Increase spacing for the horizontal layout
    // alignItems="center" 
    textAlign={{ xs: 'center', md: 'left' }} // Align text to the left on desktop
  >
    {/* LOGO - Left Side */}
    <Box
      component="img"
      src="/assets/images/logo/15 years logo-01.png"
      alt="15 Years of Excellence"
      sx={{ 
        width: "300px",
        maxWidth: "450px", // Maintains your size preference
        height: "auto",
        flexShrink: 0 ,
        mr: { md: 6, lg: 200 }    // Prevents the image from squishing
      }}
    />
    
    {/* TEXT CONTENT - Right Side */}
    <Box sx={{ width: '100%' }}>
      <Typography variant="h3" sx={{ color: "#00205B", fontWeight: 700, mb: 2 }}>
        Legacy of Excellence
      </Typography>
      <Typography sx={{ color: "#555", lineHeight: 1.8, fontSize: "1.4rem" }}>
        Sri Shanmugha Educational Institutions, established by the visionary Thiru K. Shanmugham, 
        spans across a lush 120-acre campus. Our journey began with a mission to provide 
        high-quality technical and professional education to students from all walks of life.
        <br/>
        Today, we stand as a premier destination for Engineering, Pharmacy, Nursing, and 
        Allied Health Sciences, recognized for our state-of-the-art infrastructure and 
        unwavering commitment to student success.
      </Typography>
    </Box>
  </Stack>
</Container>



 

      {/* === VISION & MISSION SECTION === */}
<Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
  <Stack 
    direction={{ xs: 'column', md: 'row' }} 
    spacing={{ xs: 4, md: 6 }}
    alignItems="stretch"
  >
    {/* VISION CARD */}
    <Box 
      sx={{ 
        flex: 1, 
        p: { xs: 4, md: 6 }, 
        backgroundColor: "#fff", 
        borderRadius: "16px",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.05)", // Soft shadow
        borderTop: "6px solid #00205B",            // Brand accent color
        transition: "transform 0.3s ease",
        "&:hover": { transform: "translateY(-5px)" },
        textAlign: { xs: 'center', md: 'left' }
      }}
    >
      <Typography variant="h3" sx={{ color: "#00205B", fontWeight: 700, mb: 3 }}>
        Our Vision
      </Typography>
      <Typography sx={{ color: "#555", lineHeight: 1.8, fontSize: "1.3rem" }}>
        To be an institute of repute in the field of engineering and technology 
        by educating students to meet the global challenges and to instill 
        values that would enable them to enrich the society.
      </Typography>
    </Box>

    {/* MISSION CARD */}
    <Box 
      sx={{ 
        flex: 1, 
        p: { xs: 4, md: 6 }, 
        backgroundColor: "#f9f9f9", // Slight off-white to differentiate
        borderRadius: "16px",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
        borderTop: "6px solid #00205B",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "translateY(-5px)" },
        textAlign: { xs: 'center', md: 'left' }
      }}
    >
      <Typography variant="h3" sx={{ color: "#00205B", fontWeight: 700, mb: 3 }}>
        Our Mission
      </Typography>
      <Typography component="div" sx={{ color: "#555", lineHeight: 1.8, fontSize: "1.2rem" }}>
        <ul style={{ paddingLeft: '20px', margin: 0, textAlign: 'left' }}>
          <li style={{ marginBottom: '10px' }}>To provide an atmosphere that facilitates high quality learning.</li>
          <li style={{ marginBottom: '10px' }}>To impart training for relevant hard and soft skills.</li>
          <li style={{ marginBottom: '10px' }}>To instill industrial adaptability and entrepreneurship.</li>
          <li>To promote research and development for the benefit of society.</li>
        </ul>
      </Typography>
    </Box>
  </Stack>
</Container>
      {/* === CORE VALUES SECTION === */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, textAlign: "center" }}>
  <Typography variant="h3" sx={{ color: "#00205B", fontWeight: 700, mb: 6 }}>
    Why Choose Us?
  </Typography>
  
  <Grid container spacing={5} alignItems="center">
    {[
      { title: "Industry Sync", desc: "Curriculum designed in collaboration with top corporate partners." },
      { title: "Modern Labs", desc: "Advanced AICTE IDEA Labs and specialized research centers." },
      { title: "Holistic Growth", desc: "Focus holistic approach by combining physical, creative, and character-building activities" },
      { title: "Placements", desc: "Proven track record with available 300+ recruiting companies." }
    ].map((item, index) => (
      <Grid 
        item 
        xs={12}   /* 1 column on Mobile */
        sm={6}    /* 2 columns on Tablet (Alignment fix) */
        md={3}    /* 4 columns on Desktop */
        key={index} 
        sx={{ display: 'flex' }}
      >
        <Box 
          sx={{ 
            p: 4, 
    Width: { xs: '100%', md: '700px' }, 
    // 2. Center horizontally using auto margins
    mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #f0f0f0',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
              borderColor: '#FFC107'
            }
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#00205B", mb: 2 }}>
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.6 }}>
            {item.desc}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Container>
    </Box>
    <Footer />
    </>
  );
};

export default AboutUs;