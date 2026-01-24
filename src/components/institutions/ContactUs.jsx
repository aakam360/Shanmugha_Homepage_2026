"use client";

import React from 'react';
import { 
  Box, Container, Typography, Grid, TextField, Button, Paper, Stack 
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Header from "@/components/institutions/header-3";
import Footer from "@/components/institutions/footer";

const ContactUs = () => {
  
  // === YUP VALIDATION SCHEMA ===
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter only characters for your name")
      .required("Name is required"),
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    message: Yup.string()
      .required("Message is required"),
  });

  // === FORMIK SETUP ===
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);
      alert("Thank you! Your message has been sent.");
      resetForm();
    },
  });

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ color: '#FFC107', fontSize: { xs: 24, md: 30 } }} />,
      title: "Our Location",
      details: ["Sankagiri - Salem Main Road,", "Pullipalayam, Morur (PO),", "Sankagiri (TK), Salem - 637304."]
    },
    {
      icon: <PhoneIcon sx={{ color: '#FFC107', fontSize: { xs: 24, md: 30 } }} />,
      title: "Phone Number",
      details: ["+91 4283 262999", "0428-335-9999"]
    },
    {
      icon: <EmailIcon sx={{ color: '#FFC107', fontSize: { xs: 24, md: 30 } }} />,
      title: "Email Address",
      details: ["info@shanmugha.edu.in", "admissions@shanmugha.edu.in"]
    },
    {
      icon: <AccessTimeIcon sx={{ color: '#FFC107', fontSize: { xs: 24, md: 30 } }} />,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 5:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <>
      <Header />
      <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
        {/* HERO SECTION */}
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
          <Container sx={{ position: "relative", zIndex: 2, textAlign: "center", px: 3 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "3.5rem" }, mb: 1 }}>
              Contact Us
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: "600px", mx: "auto" }}>
              We're here to help and answer any questions you might have.
            </Typography>
          </Container>
        </Box>

        {/* CONTACT INFO & FORM */}
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 6 } }}>
          <Grid container spacing={6} justifyContent="space-between">
            
            {/* LEFT: Contact Info */}
            <Grid item xs={12} md={5} lg={4}> 
              <Typography variant="h4" sx={{ color: "#00205B", fontWeight: 700, mb: 4 }}>
                Get In Touch
              </Typography>
              <Stack spacing={4}>
                {contactInfo.map((info, index) => (
                  <Stack key={index} direction="row" spacing={3} alignItems="flex-start">
                    <Box sx={{ bgcolor: '#f0f4f8', p: 2, borderRadius: '12px', flexShrink: 0 }}>
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#00205B', mb: 0.5 }}>
                        {info.title}
                      </Typography>
                      {info.details.map((line, i) => (
                        <Typography key={i} variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                          {line}
                        </Typography>
                      ))}
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            {/* RIGHT: Form */}
            <Grid item xs={12} md={7} lg={7} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }}}>              
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 4, md: 6 },
                  width: '600px',
                  maxWidth: '600px',
                  borderRadius: '24px',
                  border: '1px solid #eee',
                  bgcolor: '#fafafa',
                  boxShadow: '0px 10px 30px rgba(0,0,0,0.05)' 
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, color: '#00205B' }}>
                  Send us a Message
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                  <Stack spacing={3}>
                    <TextField 
                      fullWidth 
                      label="Your Name" 
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField 
                      fullWidth 
                      label="Email Address" 
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField 
                      fullWidth 
                      label="Phone Number" 
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                    <TextField 
                      fullWidth 
                      label="Message" 
                      name="message" 
                      multiline 
                      rows={4}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.message && Boolean(formik.errors.message)}
                      helperText={formik.touched.message && formik.errors.message}
                    />
                    <Button 
                      type="submit" 
                      variant="contained" 
                      size="large"
                      sx={{ bgcolor: '#00205B', py: 2, fontWeight: 'bold', '&:hover': { bgcolor: '#003399' } }}
                    >
                      SUBMIT NOW
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        {/* MAP SECTION */}
        <Box sx={{ width: '100%', height: { xs: '300px', md: '450px' } }}>
          <iframe
            title="Map"
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=Shanmugha%20College%20of%20Engineering&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ContactUs;