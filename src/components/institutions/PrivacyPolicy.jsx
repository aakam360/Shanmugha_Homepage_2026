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

const PrivacyPolicy = () => {
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
            Privacy Policy
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: "800px", mx: "auto", fontSize: { xs: "1rem", md: "1.5rem" }, mt: 2 }}>
            Learn how we collect, use, and protect your personal information to ensure your privacy and security.
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
            At Sri Shanmugha Educational Institutions, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
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
            Information We Collect
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
            We may collect personal information such as your name, email address, phone number, and other details when you:
            <ul>
              <li>Register for courses or programs</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our website</li>
              <li>Participate in surveys or events</li>
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
            How We Use Your Information
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
            The information we collect is used to:
            <ul>
              <li>Provide and improve our educational services</li>
              <li>Communicate with you about admissions, events, and updates</li>
              <li>Process applications and registrations</li>
              <li>Ensure compliance with legal and regulatory requirements</li>
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
            Data Security
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
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
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
            Your Rights
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
            You have the right to:
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict certain types of processing</li>
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
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
            This Privacy Policy was last updated on [Date]. We reserve the right to update this policy at any time.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
