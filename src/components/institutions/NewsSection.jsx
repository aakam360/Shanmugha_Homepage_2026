// import React from 'react';
// import Slider from 'react-slick';
// import { Box, Container, Typography, Grid, IconButton, Card } from '@mui/material';

// // You need to import the slick-carousel CSS files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // --- Sample Data for the News Carousel (borderColor removed) ---
// const newsData = [
//   { id: 1, image: '/assets/images/ShanmughaImages.jpg' },
//   { id: 2, image: '/assets/images/ShanmughaImages.jpg' },
//   { id: 3, image: '/assets/images/ShanmughaImages.jpg' },
//   { id: 4, image: '/assets/images/ShanmughaImages.jpg' },
//   { id: 5, image: '/assets/images/ShanmughaImages.jpg' },
//   { id: 6, image: '/assets/images/ShanmughaImages.jpg' },
// ];

// // --- NEW: Image paths for the right-side grid ---
// const rightSideImages = [
//     '/assets/images/nursing/department/child-health.jpg', // ** IMPORTANT: Replace with your image path **
// ];

// // --- Custom Arrow Components (Using text to avoid icon dependency issue) ---
// const SlickArrow = ({ onClick, isNext = false }) => (
//   <IconButton
//     onClick={onClick}
//     sx={{
//       position: 'absolute',
//       top: '50%',
//       transform: 'translateY(-50%)',
//       ...(isNext ? { right: -25 } : { left: -25 }),
//       zIndex: 2,
//       backgroundColor: 'white',
//       color: '#0f224a',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
//       '&:hover': {
//         backgroundColor: '#f5f5f5',
//       },
//       width: 40,
//       height: 40,
//     }}
//   >
//     <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', lineHeight: 1 }}>
//         {isNext ? '>' : '<'}
//     </Typography>
//   </IconButton>
// );

// const NewsSection = () => {
//   const slickSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <SlickArrow isNext />,
//     prevArrow: <SlickArrow />,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Box sx={{ width: '100%', bgcolor: 'white', py: { xs: 5, md: 8 } }}>
//       <Container maxWidth="xl">

//         {/* --- MODIFIED: Grid layout changed to 9:3 (a 3:1 ratio) --- */}
//         <Grid container spacing={4} alignItems="center">

//           {/* Left Column: News Slider */}
//           <Grid item xs={12} md={9}>
//             <Box sx={{ mb: 4, textAlign: 'center' }}>
//             <Typography
//             variant="h4"
//             component="h2"
//             sx={{
//                 fontWeight: 700,
//                 color: '#0f224a',
//                 display: 'inline-block',
//                 position: 'relative',
//                 pb: 1,
//             }}
//             >
//             News@shanmugha
//             <Box 
//                 sx={{ 
//                 position: 'absolute', 
//                 bottom: 0, 
//                 left: '50%', 
//                 transform: 'translateX(-50%)',
//                 height: '4px', 
//                 width: '80px', // Fixed width for the centered underline
//                 bgcolor: '#0f224a' 
//                 }} 
//             />
//             </Typography>
//         </Box>
//             <Slider {...slickSettings}>
//               {newsData.map((item) => (
//                 <Box key={item.id} sx={{ p: 1.5 }}>
//                   <Card
//                     sx={{
//                       // --- MODIFIED: Border removed ---
//                       borderRadius: 3,
//                       overflow: 'hidden',
//                       boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                     }}
//                   >
//                     <Box
//                       component="img"
//                       src={item.image}
//                       alt={`News article ${item.id}`}
//                       sx={{
//                         width: '100%',
//                         height: 'auto',
//                         display: 'block',
//                       }}
//                     />
//                   </Card>
//                 </Box>
//               ))}
//             </Slider>
//           </Grid>

//           {/* --- MODIFIED: Right Column is now a vertical image grid --- */}
//           <Grid item xs={12} md={3}>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                 {rightSideImages.map((src, index) => (
//                     <Box
//                         key={index}
//                         component="img"
//                         src={src}
//                         alt={`Promotional image ${index + 1}`}
//                         sx={{
//                             width: '100%',
//                             height: 'auto',
//                             objectFit: 'cover',
//                             borderRadius: 3,
//                             boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                         }}
//                     />
//                 ))}
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//       <Box sx={{ height: '30px', bgcolor: '#0f224a', mt: { xs: 5, md: 8 } }} />
//     </Box>
//   );
// };

// export default NewsSection;

// import React from 'react';
// import Slider from 'react-slick';
// import { Box, Container, Typography, Grid, IconButton, Card } from '@mui/material';

// // You need to import the slick-carousel CSS files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // --- Sample Data ---
// const newsData = [
//   { id: 1, image: 'assets/images/news/8x4 copy.jpg' },
//   { id: 2, image: 'assets/images/news/Backdrop (3).png' },
//   { id: 3, image: 'assets/images/news/Backdrop (4).png' },
//   { id: 4, image: 'assets/images/news/launch details 1.jpg' },
//   { id: 5, image: 'assets/images/news/launch details 2.jpg' },
//   { id: 6, image: 'assets/images/news/launch details 3.jpg' },
// ];

// const rightSideImages = [
//     '/assets/images/nursing/department/child-health.jpg',
// ];

// // --- MODIFIED: Custom Arrow Component with more bottom spacing ---
// const SlickArrow = ({ onClick, isNext = false }) => (
//   <IconButton
//     onClick={onClick}
//     sx={{
//       position: 'absolute',
//       // --- MODIFIED: Increased negative value to push buttons further down ---
//       bottom: -55, 
//       left: '50%', 
//       transform: isNext ? 'translateX(5px)' : 'translateX(-45px)',
//       zIndex: 2,
//       backgroundColor: 'white',
//       color: '#0f224a',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
//       '&:hover': {
//         backgroundColor: '#f5f5f5',
//       },
//       width: 40,
//       height: 40,
//     }}
//   >
//     <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', lineHeight: 1 }}>
//         {isNext ? '>' : '<'}
//     </Typography>
//   </IconButton>
// );

// const NewsSection = () => {
//   const slickSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <SlickArrow isNext />,
//     prevArrow: <SlickArrow />,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Box sx={{ width: '100%', bgcolor: 'white', py: { xs: 5, md: 8 } }}>
//       <Container maxWidth={false} disableGutters>
//         <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">

//           {/* Left Column: News Slider */}
//           <Grid item xs={12} md={9}>
//             <Box sx={{ mb: 4, textAlign: 'center' }}>
//               <Typography
//                 variant="h4"
//                 component="h2"
//                 sx={{
//                   fontSize: '3.5rem',
//                   fontWeight: 700,
//                   color: '#0f224a',
//                   display: 'inline-block',
//                   position: 'relative',
//                   pb: 1,
//                 }}
//               >
//                 News@shanmugha
//                 <Box 
//                   sx={{ 
//                     position: 'absolute', 
//                     bottom: 0, 
//                     left: '50%', 
//                     transform: 'translateX(-50%)',
//                     height: '4px', 
//                     width: '80px',
//                     bgcolor: '#0f224a' 
//                   }} 
//                 />
//               </Typography>
//             </Box>

//             {/* --- MODIFIED: Increased padding-bottom (pb) to make more room --- */}
//             <Box sx={{ position: 'relative', pb: 10 }}>
//               <Slider {...slickSettings}>
//                 {newsData.map((item) => (
//                   <Box key={item.id} sx={{ p: 1.5 }}>
//                     <Card
//                       sx={{
//                         borderRadius: 3,
//                         overflow: 'hidden',
//                         boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                       }}
//                     >
//                       <Box
//                         component="img"
//                         src={item.image}
//                         alt={`News article ${item.id}`}
//                         sx={{
//                           width: '100%',
//                           height: 'auto',
//                           display: 'block',
//                         }}
//                       />
//                     </Card>
//                   </Box>
//                 ))}
//               </Slider>
//             </Box>
//           </Grid>

//           {/* Right Column: Vertical image grid */}
//           <Grid item xs={12} md={3}>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, px: { xs: 1.5, md: 0 } }}>
//                 {rightSideImages.map((src, index) => (
//                     <Box
//                         key={index}
//                         component="img"
//                         src={src}
//                         alt={`Promotional image ${index + 1}`}
//                         sx={{
//                             width: '100%',
//                             height: 'auto',
//                             objectFit: 'cover',
//                             borderRadius: 3,
//                             boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                         }}
//                     />
//                 ))}
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default NewsSection;
// import React from 'react';
// import Slider from 'react-slick';
// import { Box, Container, Typography, Grid, IconButton, Card } from '@mui/material';

// // You need to import the slick-carousel CSS files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // --- Sample Data ---
// const newsData = [
//   { id: 1, image: 'assets/images/news/8x4 copy.jpg' },
//   { id: 2, image: 'assets/images/news/Backdrop (3).png' },
//   { id: 3, image: 'assets/images/news/Backdrop (4).png' },
//   { id: 4, image: 'assets/images/news/launch details 1.jpg' },
//   { id: 5, image: 'assets/images/news/launch details 2.jpg' },
//   { id: 6, image: 'assets/images/news/launch details 3.jpg' },
// ];

// const rightSideImages = [
//     '/assets/images/nursing/department/child-health.jpg',
// ];

// // --- MODIFIED: Custom Arrow Component with more bottom spacing ---
// const SlickArrow = ({ onClick, isNext = false }) => (
//   <IconButton
//     onClick={onClick}
//     sx={{
//       position: 'absolute',
//       // --- MODIFIED: Increased negative value to push buttons further down ---
//       bottom: -55, 
//       left: '50%', 
//       transform: isNext ? 'translateX(5px)' : 'translateX(-45px)',
//       zIndex: 2,
//       backgroundColor: 'white',
//       color: '#0f224a',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
//       '&:hover': {
//         backgroundColor: '#f5f5f5',
//       },
//       width: 40,
//       height: 40,
//     }}
//   >
//     <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', lineHeight: 1 }}>
//         {isNext ? '>' : '<'}
//     </Typography>
//   </IconButton>
// );

// const NewsSection = () => {
//   const slickSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     // --- MODIFIED: Changed default slidesToShow to 1 for mobile-first approach ---
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <SlickArrow isNext />,
//     prevArrow: <SlickArrow />,
//     responsive: [
//       // --- MODIFIED: Reversed the responsive settings to show 1 on mobile and increase on larger screens ---
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//     ],
//   };

//   return (
//     <Box sx={{ width: '100%', bgcolor: 'white', py: { xs: 5, md: 8 } }}>
//       <Container maxWidth={false} disableGutters>
//         <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">

//           {/* Left Column: News Slider */}
//           <Grid item xs={12} md={9}>
//             <Box sx={{ mb: 4, textAlign: 'center' }}>
//               <Typography
//                 variant="h4"
//                 component="h2"
//                 sx={{
//                   fontSize: '3.5rem',
//                   fontWeight: 700,
//                   color: '#0f224a',
//                   display: 'inline-block',
//                   position: 'relative',
//                   pb: 1,
//                 }}
//               >
//                 News@shanmugha
//                 <Box 
//                   sx={{ 
//                     position: 'absolute', 
//                     bottom: 0, 
//                     left: '50%', 
//                     transform: 'translateX(-50%)',
//                     height: '4px', 
//                     width: '80px',
//                     bgcolor: '#0f224a' 
//                   }} 
//                 />
//               </Typography>
//             </Box>

//             {/* --- MODIFIED: Increased padding-bottom (pb) to make more room --- */}
//             <Box sx={{ position: 'relative', pb: 10 }}>
//               <Slider {...slickSettings}>
//                 {newsData.map((item) => (
//                   <Box key={item.id} sx={{ p: 1.5 }}>
//                     <Card
//                       sx={{
//                         borderRadius: 3,
//                         overflow: 'hidden',
//                         boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                       }}
//                     >
//                       <Box
//                         component="img"
//                         src={item.image}
//                         alt={`News article ${item.id}`}
//                         sx={{
//                           width: '100%',
//                           height: 'auto',
//                           display: 'block',
//                         }}
//                       />
//                     </Card>
//                   </Box>
//                 ))}
//               </Slider>
//             </Box>
//           </Grid>

//           {/* Right Column: Vertical image grid */}
//           <Grid item xs={12} md={3}>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, px: { xs: 1.5, md: 0 } }}>
//                 {rightSideImages.map((src, index) => (
//                     <Box
//                         key={index}
//                         component="img"
//                         src={src}
//                         alt={`Promotional image ${index + 1}`}
//                         sx={{
//                             width: '100%',
//                             height: 'auto',
//                             objectFit: 'cover',
//                             borderRadius: 3,
//                             boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                         }}
//                     />
//                 ))}
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default NewsSection;

"use client";

import React from 'react';
import Slider from 'react-slick';
import { Box, Container, Typography, Grid, IconButton, Card } from '@mui/material';

// You need to import the slick-carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Sample Data ---
const newsData = [
  { id: 1, image: 'assets/images/news/8x4 copy.jpg' },
  { id: 2, image: 'assets/images/news/Backdrop (3).png' },
  { id: 3, image: 'assets/images/news/Backdrop (4).png' },
  { id: 4, image: 'assets/images/news/launch details 1.jpg' },
  { id: 5, image: 'assets/images/news/launch details 2.jpg' },
  { id: 6, image: 'assets/images/news/launch details 3.jpg' },
];

const rightSideImages = [
  '/assets/images/nursing/department/child-health.jpg',
];

// --- MODIFIED: Custom Arrow Component with more bottom spacing ---
const SlickArrow = ({ onClick, isNext = false }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      // --- MODIFIED: Increased negative value to push buttons further down ---
      bottom: -55,
      left: '50%',
      transform: isNext ? 'translateX(5px)' : 'translateX(-45px)',
      zIndex: 2,
      backgroundColor: 'white',
      color: '#0f224a',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      '&:hover': {
        backgroundColor: '#f5f5f5',
      },
      width: 40,
      height: 40,
    }}
  >
    <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', lineHeight: 1 }}>
      {isNext ? '>' : '<'}
    </Typography>
  </IconButton>
);

const NewsSection = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SlickArrow isNext />,
    prevArrow: <SlickArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'white', py: { xs: 5, md: 12 } }}>
      <Container maxWidth={false} disableGutters>
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
          {/* Left Column: News Slider */}
          <Grid size={{ xs: 12, md: 9 }}>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#0f224a',
                  display: 'inline-block',
                  position: 'relative',
                  pb: 1,
                }}
              >
                News@shanmugha
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '4px',
                    width: '80px',
                    bgcolor: '#0f224a'
                  }}
                />
              </Typography>
            </Box>

            {/* --- MODIFIED: Increased padding-bottom (pb) to make more room --- */}
            <Box sx={{ position: 'relative', pb: 10 }}>

              {/* Mobile View - Only 1 Slide */}
              <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Slider
                  dots={false}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={3000}
                  nextArrow={<SlickArrow isNext />}
                  prevArrow={<SlickArrow />}
                >
                  {newsData.map((item) => (
                    <Box key={item.id} sx={{ p: 1.5 }}>
                      <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
                        <Box component="img" src={item.image} sx={{ width: '100%' }} />
                      </Card>
                    </Box>
                  ))}
                </Slider>
              </Box>

              {/* Desktop & Tablet View */}
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Slider
                  dots={false}
                  infinite={true}
                  speed={500}
                  slidesToShow={4} // Desktop Default
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={3000}
                  nextArrow={<SlickArrow isNext />}
                  prevArrow={<SlickArrow />}
                  responsive={[
                    {
                      breakpoint: 1200,
                      settings: { slidesToShow: 3 }, // Tablet
                    },
                  ]}
                >
                  {newsData.map((item) => (
                    <Box key={item.id} sx={{ p: 1.5 }}>
                      <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
                        <Box component="img" src={item.image} sx={{ width: '100%' }} />
                      </Card>
                    </Box>
                  ))}
                </Slider>
              </Box>

            </Box>

          </Grid>

          {/* Right Column: Vertical image grid */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ position: "relative", display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", px: { xs: 1.5, md: 0 } }}>
              {/* 🔸 Decorative Gold Logo - fixed on top-left */}
              <Box
                component="img"
                src="/assets/logo.png" // ✅ gold ribbon path
                alt="Decorative Gold Ribbon"
                sx={{
                  position: "absolute",
                  top: { xs: -35, md: -40 },   // ⬅️ pushes above the image slightly
                  left: { xs: -25, md: -60 },  // ⬅️ slightly outside left edge
                  height: { xs: 60, md: 85 },  // ⬅️ responsive scaling
                  width: "auto",
                  transform: "rotate(-6deg)",  // ⬅️ natural elegant tilt
                  zIndex: 10,
                  filter: "drop-shadow(2px 2px 6px rgba(0,0,0,0.25))",
                  pointerEvents: "none",       // ⬅️ allows clicking image underneath
                }}
              />

              {rightSideImages.map((src, index) => (
                <Box
                  key={index}
                  component="img"
                  src={src}
                  alt={`Promotional image ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: 3,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  }}
                />
              ))}
            </Box>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsSection;