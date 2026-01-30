"use client";

import React from 'react';
import Link from 'next/link';
import { Box, Typography, Grid, Container, Card, CardContent, Button } from '@mui/material';

const stats = [
  { number: '3500+', label: 'STUDENTS' },
  { number: '5', label: 'INSTITUTIONS' },
  { number: '300+', label: 'CORPORATE PARTNERS' },
  { number: '120', label: 'ACRE CAMPUS' },
];

const institutions = [
  {
    title: 'ENGINEERING & TECHNOLOGY',
    description: 'Cutting-edge programs in AI, Computer Science, and Engineering focused on innovation.',
    link: 'https://engineering.shanmugha.edu.in/',
    iconSrc: '/assets/images/logo/png/engglogo-01-4-1.png',
    programs: '10 UG & 2 PG Programs',
  },
  {
    title: 'PHARMACY',
    link: 'https://shanmughapharmacy.edu.in/',
    iconSrc: '/assets/images/logo/png/pharmacylogo-01-3.png',
    programs: '5 Programs',
    description: 'Shaping future pharmacists through advanced education, research, and clinical practice.',
  },
  {
    title: 'NURSING',
    link: 'https://shanmughanursing.edu.in/',
    iconSrc: '/assets/images/logo/png/Shanmugha-Nursing-For-Women.png',
    programs: '3 Programs',
    description: 'Preparing future nurses with strong clinical expertise, ethics, and empathy.',
  },
  {
    title: 'MEDICAL SCIENCE & RESEARCH',
    link: 'https://shanmugha-msr-website.onrender.com',
    iconSrc: '/assets/images/logo/png/Shanmugha-Medical-Science-Logo-Print-01.png',
    programs: '9 Programs',
    description: 'Transforming healthcare through strong medical education and advanced research initiatives',
  },
  {
    title: 'ALLIED HEALTH',
    link: 'https://shanmugha-ahs-website.onrender.com',
    iconSrc: '/assets/images/logo/png/ahslogo-01.png',
    programs: '9 Programs',
    description: 'Advancing healthcare support services with advanced allied health programs',
  },
];

const partnerLogos = [
  { src: '/assets/images/institutions/medical1.JPG', alt: 'Partner 1' },
  { src: '/assets/images/institutions/medical2.JPG', alt: 'Partner 2' },
  { src: '/assets/images/institutions/medical3.JPG', alt: 'Partner 3' },
  { src: '/assets/images/institutions/medical4.JPG', alt: 'Partner 4' },
  { src: '/assets/images/institutions/medical5.JPG', alt: 'Partner 5' },
  { src: '/assets/images/institutions/medical6.JPG', alt: 'Partner 6' },
  { src: '/assets/images/institutions/nursing1.JPG', alt: 'Partner 7' },
  { src: '/assets/images/institutions/nursing2.JPG', alt: 'Partner 8' },
  { src: '/assets/images/institutions/nursing3.JPG', alt: 'Partner 9' },
  { src: '/assets/images/institutions/engine1.JPG', alt: 'Partner 10' },
  { src: '/assets/images/institutions/engine2.JPG', alt: 'Partner 11' },
  { src: '/assets/images/institutions/engine3.JPG', alt: 'Partner 12' },
];

const topLogos = partnerLogos.slice(0, 6);
const bottomLogos = partnerLogos.slice(6, 12);

// Seamless marquee keyframes
const marqueeKeyframes = {
  '@keyframes marquee': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(-50%)' },
  },
  '@keyframes marqueeReverse': {
    from: { transform: 'translateX(-50%)' },
    to: { transform: 'translateX(0)' },
  },
};

// Reusable seamless marquee row
function LogoRow({ logos, duration = 40, reverse = false }) {
  const row = [...logos, ...logos]; // duplicate once for seamless loop
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          willChange: 'transform',
          animation: `${reverse ? 'marqueeReverse' : 'marquee'} ${duration}s linear infinite`,
          '&:hover': { animationPlayState: 'paused' },
          ...marqueeKeyframes,
        }}
      >
        {row.map((logo, i) => (
          <Box
            key={`${logo.src}-${i}`}
            sx={{
              flex: '0 0 auto',
              px: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              draggable={false}
              sx={{
                display: 'block',
                maxWidth: 180,
                height: 'auto',
                borderRadius: '10px',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const Sets = () => {
  return (
    <>
      {/* === TOP BANNER SECTION === */}
      <Box
        component="section"
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 5, md: 9 },
          color: "white",
          textAlign: "center",
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
            backgroundColor: "rgba(1, 23, 85, 0.88)",
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              mb: { xs: 6, md: 8 },
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3rem" },
              letterSpacing: "1px",
              color: "white",
            }}
          >
            Leading The Future Of Education
          </Typography>
          <Grid container spacing={{ xs: 4, md: 2 }} justifyContent="center">
            {stats.map((stat) => (
              <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
                <Box>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "2.5rem", md: "5rem" },
                      lineHeight: 1.1,
                      color: "white",
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      fontWeight: 500,
                      mt: 1,
                      letterSpacing: "1.5px",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      textTransform: "uppercase",
                      color: "#FFD700",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* === ACCREDITATIONS SECTION === */}
      <Box
        sx={{ py: { xs: 5, md: 7 }, mt: { xs: 4, md: 12 }, bgcolor: "white" }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              color: "#00205B",
              fontWeight: "bold",
              mb: 5,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3rem" },
            }}
          >
            Accreditations & Approvals
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 3, sm: 6, md: 10 },
              flexWrap: "wrap",
              mb: 4,
            }}
          >
            {/* <Box
              component="img"
              src="/assets/images/batch-images/1.png"
              alt="Accreditation 1"
              sx={{ height: { xs: 110, md: 150 } }}
            /> */}
            <Box
              component="img"
              src="/assets/images/batch-images/3.png"
              alt="Accreditation 2"
              sx={{ height: { xs: 110, md: 150 } }}
            />
            {/* <Box
              component="img"
              src="/assets/images/batch-images/1.png"
              alt="Accreditation 3"
              sx={{ height: { xs: 110, md: 150 } }}
            /> */}
          </Box>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              lineHeight: 1.7,
              maxWidth: "860px",
              mx: "auto",
              fontSize: "1rem",
            }}
          >
            Anna University | Nursing Council | M.G.R Medical University |
            Pharmacy Council Of India | ARIIA Innovation | Government Recognized
            | Industry Partnerships | International Standards
          </Typography>
        </Container>
      </Box>

      {/* === OUR INSTITUTIONS & LOGO SCROLLER SECTION === */}
      <Box sx={{ py: 1, bgcolor: "#f0f2f5" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              bgcolor: "#00205B",
              borderRadius: "25px",
              p: { xs: 2, md: 2 },
              position: "relative",
              color: "white",
              mt: { xs: 4, md: 6 },
              minHeight: { xs: "650px", md: "850px" },
            }}
          >
            {/* === Top Right Corner Golden Logo === */}
            <Box
              component="img"
              src="/assets/logo.png" // ✅ make sure this path is correct
              alt="Decorative Golden Logo"
              sx={{
                position: "absolute",
                top: { xs: -10, md: -50 }, // ⬅ slight upward placement for perfect alignment
                right: { xs: -45, md: -50 }, // ⬅ overlap a bit outside blue box
                height: { xs: 65, md: 90 }, // ⬅ perfect visual proportion
                width: "auto",
                transform: "rotate(8deg)", // ⬅ subtle ribbon angle
                zIndex: 5, // ⬅ stays above all section elements
                filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.25))",
              }}
            />

            <Box
              component="img"
              src="/path/to/your/corner-logo.svg"
              alt=""
              sx={{
                position: "absolute",
                top: { xs: 20, md: 30 },
                right: { xs: 20, md: 30 },
                height: { xs: "25px", md: "35px" },
              }}
            />
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                color: "#FFC107",
                fontSize: { xs: "2.5rem", sm: "3rem", md: "2rem" },
                fontWeight: "bold",
                my: { xs: 2, md: 1 },
              }}
            >
              Our Institutions
            </Typography>

            <Grid
              container
              spacing={2.5}
              columns={{ xs: 12, md: 20 }}
              sx={{ px: { xs: 1, md: 2 } }}
            >
              {institutions.map((inst, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      minHeight: 250,
                      borderRadius: "14px",
                      bgcolor: "white",
                      color: "black",
                      p: 2,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    }}
                  >
                    <CardContent
                      sx={{
                        p: "0 !important",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Top Section */}
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            mb: 2,
                          }}
                        >
                          <Typography
                            variant="h5"
                            component="h5"
                            sx={{
                              fontWeight: "800",
                              flexGrow: 1,
                              fontSize: { xs: "1rem", md: "1rem" },
                              lineHeight: 1.4,
                            }}
                          >
                            {inst.title}
                          </Typography>
                          <Box
                            component="img"
                            src={inst.iconSrc}
                            alt={`${inst.title} logo`}
                            sx={{
                              height: { xs: 35, md: 50 },
                              width: { xs: 35, md: 50 },
                              ml: 2,
                              flexShrink: 0,
                            }}
                          />
                        </Box>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{
                            mb: 2,
                            fontSize: { xs: "1rem", md: "1rem" },
                            lineHeight: 1.5,
                          }}
                        >
                          {inst.description}
                        </Typography>
                      </Box>

                      {/* Bottom Section */}
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            color: "#00205B",
                            mb: 1.5,
                            fontSize: { xs: "1rem", md: "1.1rem" },
                          }}
                        >
                          {inst.programs}
                        </Typography>
                        <Link href={inst.link} passHref>
                          <Button
                            variant="contained"
                            fullWidth
                            sx={{
                              bgcolor: "#FFC107",
                              color: "#00205B",
                              fontWeight: "bold",
                              borderRadius: "8px",
                              py: 1.2,
                              fontSize: { xs: "1rem", md: "1rem" },
                              "&:hover": {
                                bgcolor: "#ffb300",
                                color: "#00205B",
                              },
                            }}
                          >
                            Explore Now
                          </Button>
                        </Link>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* --- LOGO SCROLLER: seamless loop, no empty space --- */}
            {/* --- LOGO SCROLLER: seamless loop, with spacing between rows --- */}
            <Box
              sx={{
                mt: { xs: 6, md: 8 },
                bgcolor: "white",
                borderRadius: "30px",
                p: 4,
              }}
            >
              {/* Top Row */}
              <LogoRow logos={topLogos} duration={40} />
              {/* Added spacing here */}
              <Box sx={{ height: { xs: 28, md: 36 } }} />{" "}
              {/* This adds vertical space between the two rows */}
              {/* Bottom Row */}
              <LogoRow logos={bottomLogos} duration={40} reverse />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Sets;
