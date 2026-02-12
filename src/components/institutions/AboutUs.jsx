
"use client"; // This MUST be the first line
 
import React from "react";
import Image from "next/image";
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
 
 
/**
* Reusable 2-col section with configurable image position and optional divider
* @param {Object} props
* @param {string} [props.id] - Section ID
* @param {string} props.title - Section title
* @param {React.ReactNode} props.body - Section body content
* @param {string} props.imgSrc - Image source
* @param {string} props.imgAlt - Image alt text
* @param {boolean} [props.imageLeft=true] - Position image on left
* @param {boolean} [props.divider=true] - Show divider
*/
function ContentSection({
  id,
  title,
  body,
  imgSrc,
  imgAlt,
  imageLeft = true,
  divider = true,
}) {
  return (
    <section id={id} className="relative scroll-mt-28">
      {divider && (
        <div
          className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200"
          aria-hidden
        />
      )}
 
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-12 gap-y-8 items-start">
        {/* IMAGE */}
        <div
          className={`lg:col-span-5 ${
            imageLeft
              ? "order-1 lg:order-1"
              : "order-1 lg:order-2 flex justify-center lg:justify-end"
          }`}
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={imgSrc}
              alt={imgAlt}
              width={880}
              height={620}
              className="object-cover w-full h-full"
              priority={false}
            />
          </div>
        </div>
 
        {/* TEXT */}
        <div
          className={`lg:col-span-7 ${
            imageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3">{title}</h3>
          <div className="text-neutral-700 text-base md:text-lg leading-7 md:leading-8">
            {body}
          </div>
        </div>
      </div>
    </section>
  );
}
 
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
      <ul style={{ paddingLeft: '20px', margin: 0, textAlign: 'left' }}>
  <li style={{ marginBottom: '10px' }}>
    To achieve excellence in education through continuous innovation and quality learning.
  </li>
  <li style={{ marginBottom: '10px' }}>
    To prepare learners to meet global challenges with competence and confidence.
  </li>
  <li style={{ marginBottom: '10px' }}>
    To nurture ethical values, leadership qualities, and social responsibility.
  </li>
  <li>
    To promote research and development for the benefit of society.
  </li>
</ul>
 
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
     
{/* ================= ABOUT & LEADERSHIP SECTION ================= */}
<Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
  <Grid container spacing={4}>
    {/* TRUST CARD */}
    <Grid item xs={12}>
      <Box
        sx={{
          p: { xs: 4, md: 6 },
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
          borderTop: "6px solid #00205B",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "translateY(-5px)" },
          textAlign: 'left',
          minHeight: "300px",
          display: "flex",
          flexDirection: "row",
          gap: { xs: 3, md: 4 },
          alignItems: "center",
        }}
      >
        {/* IMAGE - LEFT SIDE */}
        <Box
          sx={{
            minWidth: "250px",
            width: "250px",
            height: "250px",
            borderRadius: "12px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Image
            src="/assets/images/about/trust.jpg"
            alt="Community service and educational outreach"
            width={250}
            height={250}
            className="object-cover w-full h-full"
            priority={false}
          />
        </Box>
        
        {/* CONTENT - RIGHT SIDE */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ color: "#00205B", fontWeight: 700, mb: 2 }}>
            Sri Shanmugha Educational Charitable Trust
          </Typography>
          <Typography sx={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem" }}>
            The Sri Shanmugha Charitable Trust embodies our founding principles of
            service and educational empowerment. For over a decade, the trust has
            been instrumental in making quality education accessible to deserving
            students from all socioeconomic backgrounds.
          </Typography>
        </Box>
      </Box>
    </Grid>
 
    {/* CHAIRMAN CARD */}
    <Grid item xs={12}>
      <Box
        sx={{
          p: { xs: 4, md: 6 },
          backgroundColor: "#f9f9f9",
          borderRadius: "16px",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
          borderTop: "6px solid #00205B",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "translateY(-5px)" },
          textAlign: 'left',
          minHeight: "300px",
          display: "flex",
          flexDirection: "row",
          gap: { xs: 3, md: 4 },
          alignItems: "center",
        }}
      >
        {/* IMAGE - LEFT SIDE */}
        <Box
          sx={{
            minWidth: "250px",
            width: "250px",
            height: "250px",
            borderRadius: "12px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Image
            src="/assets/images/about/chairman.jpg"
            alt="Chairman of Sri Shanmugha Educational Institutions"
            width={250}
            height={250}
            className="object-cover w-full h-full"
            priority={false}
          />
        </Box>
        
        {/* CONTENT - RIGHT SIDE */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ color: "#00205B", fontWeight: 700, mb: 2 }}>
            Chairman's Message
          </Typography>
          <Typography sx={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem" }}>
            It is with immense pride and hope that I welcome you to Sri Shanmugha
            Educational Institutions. Our institutions are committed to developing
            well-rounded individuals equipped with technical expertise, critical
            thinking abilities, and strong ethical values.
          </Typography>
        </Box>
      </Box>
    </Grid>
 
    {/* EXECUTIVE DIRECTOR CARD */}
    <Grid item xs={12}>
      <Box
        sx={{
          p: { xs: 4, md: 6 },
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
          borderTop: "6px solid #00205B",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "translateY(-5px)" },
          textAlign: 'left',
          minHeight: "300px",
          display: "flex",
          flexDirection: "row",
          gap: { xs: 3, md: 4 },
          alignItems: "center",
        }}
      >
        {/* IMAGE - LEFT SIDE */}
        <Box
          sx={{
            minWidth: "250px",
            width: "250px",
            height: "250px",
            borderRadius: "12px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Image
            src="/assets/images/about/ed.jpg"
            alt="Executive Director with faculty members"
            width={250}
            height={250}
            className="object-cover w-full h-full"
            priority={false}
          />
        </Box>
        
        {/* CONTENT - RIGHT SIDE */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ color: "#00205B", fontWeight: 700, mb: 2 }}>
            Executive Director's Message
          </Typography>
          <Typography sx={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem" }}>
            Our institutions are built on the foundation of academic excellence and
            innovation. The integration of technology in education, emphasis on research
            and development, and strong industry-academia collaboration form the
            cornerstone of our educational philosophy.
          </Typography>
        </Box>
      </Box>
    </Grid>
  </Grid>
</Container>
 
 
    </Box>
    <Footer />
    </>
  );
};
 
export default AboutUs;
 