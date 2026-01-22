"use client";





import React from "react";

import { Container, Grid, Card, Typography, Box } from "@mui/material";

import { keyframes } from "@mui/system";

// Placement statistics

const placementStats = [

  { number: "100%", title: "Placement Assurance", description: "Guaranteed job placement for all eligible students" },

  { number: "300+", title: "Companies on Campus", description: "Top MNCs and startups visit for recruitment" },

  { number: "1000+", title: "Paid Internships", description: "Best internship opportunities across industries" },

  { number: "₹1.5Cr+", title: "Total Stipend Earned", description: "Collective amount earned by students through internships" },

];

// Logo image names (from /assets/images/recruiters)

const logoImageNames = [
  "Shanmugha-Top-Recruiters-01.jpg",
  "Shanmugha-Top-Recruiters-02.jpg",
  "Shanmugha-Top-Recruiters-03.jpg",
  "Shanmugha-Top-Recruiters-04.jpg",
  "Shanmugha-Top-Recruiters-05.jpg",
  "Shanmugha-Top-Recruiters-06.jpg",
  "Shanmugha-Top-Recruiters-07.jpg",
  "Shanmugha-Top-Recruiters-08.jpg",
  "Shanmugha-Top-Recruiters-09.jpg",
  "Shanmugha-Top-Recruiters-10.jpg",
  "Shanmugha-Top-Recruiters-11.jpg",
  "Shanmugha-Top-Recruiters-12.jpg",
  "Shanmugha-Top-Recruiters-13.jpg",
  "Shanmugha-Top-Recruiters-14.jpg",
  "Shanmugha-Top-Recruiters-15.jpg",
  "Shanmugha-Top-Recruiters-16.jpg",
  "Shanmugha-Top-Recruiters-17.jpg",
  "Shanmugha-Top-Recruiters-18.jpg",
  "Shanmugha-Top-Recruiters-19.jpg",
  "Shanmugha-Top-Recruiters-20.jpg",
  "Shanmugha-Top-Recruiters-21.jpg",
  "Shanmugha-Top-Recruiters-22.jpg",
  "Shanmugha-Top-Recruiters-23.jpg",
  "Shanmugha-Top-Recruiters-24.jpg",
  "Shanmugha-Top-Recruiters-25.jpg",
  "Shanmugha-Top-Recruiters-26.jpg",
  "Shanmugha-Top-Recruiters-27.jpg",
  "Shanmugha-Top-Recruiters-28.jpg",
  "Shanmugha-Top-Recruiters-29.jpg",
  "Shanmugha-Top-Recruiters-30.jpg",
  "Shanmugha-Top-Recruiters-31.jpg",
  "Shanmugha-Top-Recruiters-32.jpg",
  "Shanmugha-Top-Recruiters-33.jpg",
  "Shanmugha-Top-Recruiters-34.jpg",
  "Shanmugha-Top-Recruiters-35.jpg",
  "Shanmugha-Top-Recruiters-36.jpg",
  "Shanmugha-Top-Recruiters-37.jpg",
  "Shanmugha-Top-Recruiters-38.jpg",
  "Shanmugha-Top-Recruiters-39.jpg",
  "Shanmugha-Top-Recruiters-40.jpg",
  "Shanmugha-Top-Recruiters-41.jpg",
  "Shanmugha-Top-Recruiters-42.jpg",
  "Shanmugha-Top-Recruiters-43.jpg",
  "Shanmugha-Top-Recruiters-45.jpg",
  "Shanmugha-Top-Recruiters-46.jpg",
  "Shanmugha-Top-Recruiters-47.jpg",
  "Shanmugha-Top-Recruiters-49.jpg",
  "Shanmugha-Top-Recruiters-50.jpg",
  "Shanmugha-Top-Recruiters-52.jpg",
  "Shanmugha-Top-Recruiters-53.jpg",
  "Shanmugha-Top-Recruiters-55.jpg",
  "Shanmugha-Top-Recruiters-56.jpg",
  "Shanmugha-Top-Recruiters-58.jpg",
  "Shanmugha-Top-Recruiters-59.jpg",
  "Shanmugha-Top-Recruiters-61.jpg",
  "Shanmugha-Top-Recruiters-62.jpg",
  "Shanmugha-Top-Recruiters-64.jpg",
  "Shanmugha-Top-Recruiters-65.jpg",
  "Shanmugha-Top-Recruiters-66.jpg",
  "Shanmugha-Top-Recruiters-67.jpg",
  "Shanmugha-Top-Recruiters-69.jpg",
  "Shanmugha-Top-Recruiters-70.jpg",
  "Shanmugha-Top-Recruiters-71.jpg",
  "Shanmugha-Top-Recruiters-72.jpg",
  "Shanmugha-Top-Recruiters-73.jpg",
  "Shanmugha-Top-Recruiters-74.jpg",
  "Shanmugha-Top-Recruiters-75.jpg",
  "Shanmugha-Top-Recruiters-76.jpg",
  "Shanmugha-Top-Recruiters-77.jpg",
  "Shanmugha-Top-Recruiters-79.jpg",
  "Shanmugha-Top-Recruiters-80.jpg",
  "Shanmugha-Top-Recruiters-81.jpg",
  "Shanmugha-Top-Recruiters-82.jpg",
  "Shanmugha-Top-Recruiters-84.jpg",

  // Add more as needed to fill the scrolling area effectively
];

// Full image URLs

// Construct full paths for the logos
const logos = logoImageNames.map(name => `/assets/images/recuirters/${name}`);

const scrollAnimationForward = keyframes`

  0% { transform: translateX(0); }

  100% { transform: translateX(calc(-100px * ${logos.length})); }

`;

const scrollAnimationBackward = keyframes`

  0% { transform: translateX(calc(-100px * ${logos.length})); }

  100% { transform: translateX(0); }

`;

const Features = () => {

  return (
    <Box sx={{ bgcolor: "#f8f9fa", width: "100%" }}>
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 5, md: 6 },

          display: "flex",

          flexDirection: "column",

          gap: { xs: 5, md: 6 },
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            component="h1"
            sx={{
              fontWeight: 700,

              color: "#2c3e50",

              lineHeight: 1.2,

              fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },

              mb: 1.5,
            }}
          >
            Placements & Career Opportunities
          </Typography>
          <Typography
            sx={{
              color: "#5a6e80",

              maxWidth: 700,

              mx: "auto",

              lineHeight: 1.6,

              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            Your gateway to successful careers with industry leaders
          </Typography>
        </Box>

        {/* Placement Stats */}
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {placementStats.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  textAlign: "center",

                  p: { xs: "1.5rem 1rem", md: "2rem 1rem" },

                  backgroundColor: "white",

                  borderRadius: "12px",

                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",

                  border: "1px solid rgba(0, 0, 0, 0.08)",

                  height: "100%",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "3rem", md: "3rem" },

                    fontWeight: "700",

                    color: "#002b6b",

                    mb: 1,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#2c3e50",

                    fontWeight: "600",

                    mb: 0.5,

                    lineHeight: 1.2,

                    fontSize: { xs: "1.5rem", md: "2.1rem" },
                  }}
                >
                  {stat.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#5a6e80",

                    fontSize: { xs: "1.4rem", md: "1.1rem" },

                    lineHeight: 1.5,
                  }}
                >
                  {stat.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Scrolling Logos */}
        <Box
          sx={{
            width: "100%",

            overflow: "hidden",

            py: 4,

            display: "flex",

            flexDirection: "column",

            gap: 2,

            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",

            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          {/* Row 1 */}
          <Box
            sx={{
              display: "flex",

              width: `calc(200px * ${logos.length * 2})`,
              animation: `${scrollAnimationForward} 90s linear infinite`, // Forward scroll
              alignItems: "center",

              height: "100px",
            }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <Box
                key={`row1-${idx}`}
                sx={{
                  height: "90px",

                  width: "180px",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  margin: "0 10px",

                  flexShrink: 0,
                }}
              >
                <img
                  src={logo}
                  alt={`Logo-${idx}`}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Row 2 */}
          <Box
            sx={{
              display: "flex",

              width: `calc(200px * ${logos.length * 2})`,
              animation: `${scrollAnimationBackward} 90s linear infinite`, // Backward scroll
              alignItems: "center",

              height: "100px",
            }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <Box
                key={`row2-${idx}`}
                sx={{
                  height: "90px",

                  width: "180px",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  margin: "0 10px",

                  flexShrink: 0,
                }}
              >
                <img
                  src={logo}
                  alt={`Logo-${idx}`}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );

};

export default Features;

