"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Header from "@/components/institutions/header-3";
import Footer from "@/components/institutions/footer";

// FAQ Data - Common for College Websites
const faqData = [
  {
    category: "Admissions",
    questions: [
      {
        q: "How can I apply for admission for the academic year 2026-2027?",
        a: "You can apply online by clicking the 'Apply Now' button in the header or visit our campus in person. Admissions for Engineering, Pharmacy, Nursing, and Allied Health Sciences are currently open.",
      },
      {
        q: "What are the eligibility criteria for B.Tech programs?",
        a: "Eligibility is based on the marks obtained in the Higher Secondary Examination (12th Grade) with Physics, Chemistry, and Mathematics as core subjects, following Anna University norms.",
      },
    ],
  },
  {
    category: "Placements",
    questions: [
      {
        q: "What is the placement record of the institution?",
        a: "We offer 100% placement assurance with over 300+ corporate partners visiting our campus annually, including top MNCs and startups.",
      },
      {
        q: "Are internships provided during the course?",
        a: "Yes, we facilitate over 1000+ paid internships across various industries, allowing students to earn stipends while gaining professional experience.",
      },
    ],
  },
  {
    category: "Campus Life",
    questions: [
      {
        q: "Where is the campus located and what are the facilities?",
        a: "Our lush 120-acre green campus is located in Tiruchengode, Tamil Nadu. It features state-of-the-art labs, AICTE IDEA labs, and modern infrastructure.",
      },
      {
        q: "Is hostel accommodation available for students?",
        a: "Yes, we provide safe and comfortable separate hostel facilities for men and women with all necessary amenities.",
      },
    ],
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
    <Header />

    <Box sx={{ bgcolor: "#ffffff", minHeight: "200vh" }}>
      {/* === HERO SECTION (Consistent with AboutUs.jsx) === */}
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
            backgroundColor: "rgba(0, 32, 91, 0.85)", // Deep Blue Overlay
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              mb: 2,
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Find answers to common queries about admissions, placements, and campus life.
          </Typography>
        </Container>
      </Box>

      {/* === FAQ CONTENT === */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          {/* Sidebar Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: { md: "sticky" }, top: "100px" }}>
              <Box sx={{ p: 4, bgcolor: "#f0f2f5", borderRadius: "16px", borderLeft: "5px solid #FFC107" }}>
                <HelpOutlineIcon sx={{ fontSize: 40, color: "#00205B", mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#00205B", mb: 1 }}>
                  Still have questions?
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", mb: 3 }}>
                  If you cannot find the answer you are looking for, please feel free to reach out to our support team.
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#00205B" }}>
                  Email: info@shanmugha.edu.in
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#00205B" }}>
                  Call: 0428-335-9999
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Accordions */}
          <Grid item xs={12} md={8}>
            {faqData.map((group, groupIdx) => (
              <Box key={groupIdx} sx={{ mb: 6 }}>
                <Typography
                  variant="h4"
                  sx={{ color: "#00205B", fontWeight: 700, mb: 3, borderBottom: "2px solid #f0f2f5", pb: 1 }}
                >
                  {group.category}
                </Typography>

                {group.questions.map((item, qIdx) => {
                  const panelId = `panel-${groupIdx}-${qIdx}`;
                  return (
                    <Accordion
                      key={qIdx}
                      expanded={expanded === panelId}
                      onChange={handleChange(panelId)}
                      sx={{
                        mb: 2,
                        borderRadius: "12px !important",
                        boxShadow: "none",
                        border: "1px solid #e0e0e0",
                        "&:before": { display: "none" },
                        "&.Mui-expanded": {
                          borderColor: "#FFC107",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "#00205B" }} />}
                        sx={{ px: 3, py: 1 }}
                      >
                        <Typography sx={{ fontWeight: 600, color: "#00205B", fontSize: "1.1rem" }}>
                          {item.q}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                          {item.a}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Footer />
    </>
  );
};

export default FAQ;