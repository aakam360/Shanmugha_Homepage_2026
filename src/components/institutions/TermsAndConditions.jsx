"use client"; // This MUST be the first line

import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import Header from "@/components/institutions/header-3";
import Footer from "@/components/institutions/footer";

const TermsAndConditions = () => {
  return (
    <>
      <Header />
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
            backgroundColor: "rgba(66, 95, 189, 0.85)",
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
            Terms & Conditions
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: "800px", mx: "auto", fontSize: { xs: "1rem", md: "1.5rem" }, mt: 2 }}>
            Understand the rules and regulations for using our website and services.
          </Typography>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh", py: 4 }}>
        <Container maxWidth="lg">
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.8,
              fontSize: "1.1rem",
              mb: 3,
            }}
          >
            Welcome to Sri Shanmugha Educational Institutions. These Terms & Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with these terms. If you do not agree, please do not use our website.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h4"
            sx={{
              color: "#00205B",
              fontWeight: 700,
              mb: 2,
            }}
          >
            User Responsibilities
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.8,
              fontSize: "1rem",
              mb: 3,
            }}
          >
            As a user of our website, you agree to:
            <ul>
              <li>Provide accurate and up-to-date information when registering or contacting us</li>
              <li>Use the website for lawful purposes only</li>
              <li>Not engage in any activity that could harm the website or its users</li>
              <li>Respect the intellectual property rights of Sri Shanmugha Educational Institutions</li>
            </ul>
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h4"
            sx={{
              color: "#00205B",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Intellectual Property
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.8,
              fontSize: "1rem",
              mb: 3,
            }}
          >
            All content on this website, including text, images, logos, and software, is the property of Sri Shanmugha Educational Institutions or its licensors. You may not reproduce, distribute, or create derivative works without prior written consent.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h4"
            sx={{
              color: "#00205B",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Limitation of Liability
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.8,
              fontSize: "1rem",
              mb: 3,
            }}
          >
            Sri Shanmugha Educational Institutions shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the website. We do not guarantee the accuracy or completeness of the information provided.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h4"
            sx={{
              color: "#00205B",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Governing Law
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.8,
              fontSize: "1rem",
              mb: 3,
            }}
          >
            These Terms & Conditions are governed by the laws of India. Any disputes arising from these terms shall be resolved in the courts of Tamil Nadu.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="h4"
            sx={{
              color: "#00205B",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.8,
              fontSize: "1rem",
              mb: 3,
            }}
          >
            If you have any questions about these Terms & Conditions, please contact us at:
            <br />
            Email: info@shanmugha.edu.in
            <br />
            Phone: 0428-335-9999
            <br />
            Address: Tiruchengode, Salem District, Tamil Nadu - 637211
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="body2"
            sx={{
              color: "#777",
              textAlign: "center",
              fontSize: "0.9rem",
            }}
          >
            These Terms & Conditions were last updated on [Date]. We reserve the right to update these terms at any time.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
