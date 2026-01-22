// import React from 'react';
// import { Box, Typography, Grid, Container, Paper } from '@mui/material';

// // Import desired icons from Material-UI
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import GroupIcon from '@mui/icons-material/Group';
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined';
// import PublicIcon from '@mui/icons-material/Public';

// const shineItems = [
//     {
//         // CHANGE: Increased icon font size
//         icon: <RocketLaunchIcon sx={{ fontSize: 38, color: '#FFC107' }} />,
//         title: "Startup Acceleration",
//         description: "Fast-track your startup journey with our comprehensive acceleration program and mentorship."
//     },
//     {
//         // CHANGE: Increased icon font size
//         icon: <MonetizationOnIcon sx={{ fontSize: 38, color: '#FFC107' }} />,
//         title: "Funding Support",
//         description: "Access seed funding, investor networks, and financial planning assistance for your venture."
//     },
//     {
//         // CHANGE: Increased icon font size
//         icon: <GroupIcon sx={{ fontSize: 38, color: '#FFC107' }} />,
//         title: "Mentor Network",
//         description: "Connect with 21+ expert mentors from various industries for guidance and support."
//     },
//     {
//         // CHANGE: Increased icon font size
//         icon: <AssessmentIcon sx={{ fontSize: 38, color: '#FFC107' }} />,
//         title: "Market Validation",
//         description: "Test and validate your business ideas with real market feedback and data analysis."
//     },
//     {
//         // CHANGE: Increased icon font size
//         icon: <LightbulbOutlined sx={{ fontSize: 38, color: '#FFC107' }} />,
//         title: "Innovation Workshops",
//         description: "Participate in ideation sessions, design thinking workshops, and innovation challenges."
//     },
//     {
//         // CHANGE: Increased icon font size
//         icon: <PublicIcon sx={{ fontSize: 38, color: '#FFC107' }} />,
//         title: "Go-to-Market Strategy",
//         description: "Develop effective strategies to launch and scale your product in the market."
//     },
// ];

// const AakamShine = () => {
//     return (
//         <Box sx={{ py: 8, bgcolor: '#ffffff', mt:20 }}>
//             {/* CHANGE: Using maxWidth="xl" for the widest standard container */}
//             <Container maxWidth="xl">
//                 <Typography 
//                     variant="h3" 
//                     component="h2" 
//                     sx={{ 
//                         textAlign: 'center', 
//                         fontWeight: 'bold', 
//                         color: 'text.primary', 
//                         mb: 1,
//                         // CHANGE: Increased responsive font size for the main title
//                         fontSize: { xs: '2.5rem', sm: '3.25rem', md: '3.75rem' }
//                     }}
//                 >
//                     Aakam Shine
//                 </Typography>
//                 <Typography 
//                     variant="h5" // CHANGE: Increased variant from h6 to h5
//                     sx={{ 
//                         textAlign: 'center', 
//                         color: 'text.secondary', 
//                         mb: 2, // CHANGE: Increased margin bottom
//                         maxWidth: '920px', // CHANGE: Increased max-width for the paragraph
//                         mx: 'auto',
//                         // CHANGE: Increased responsive font size for the subtitle
//                         fontSize: { xs: '1.5rem', md: '2.10rem' }
//                     }}
//                 >
//                     Transform Your Innovative Ideas Into Successful Ventures With Our
//                     Comprehensive Incubation Program. Get The Support, Resources, And Guidance
//                     You Need To Succeed.
//                 </Typography>

//                 <Paper 
//                     elevation={0} 
//                     sx={{ 
//                         bgcolor: '#1A4D2E',
//                         borderRadius: '16px', 
//                         p: { xs: 3, md: 3 } 
//                     }}
//                 >
//                     <Grid container spacing={{ xs: 4, md: 4 }}> {/* CHANGE: Increased spacing */}
//                         {shineItems.map((item, index) => (
//                             <Grid item xs={12} sm={6} md={4} key={index}>
//                                 <Box 
//                                     sx={{ 
//                                         bgcolor: 'rgba(255, 255, 255, 0.08)',
//                                         borderRadius: '12px', 
//                                         p: {xs: 3, md: 2}, // CHANGE: Increased padding
//                                         height: '90%', 
//                                         display: 'flex', 
//                                         flexDirection: 'column',
//                                         justifyContent: 'flex-start',
//                                         gap: 2 // CHANGE: Increased gap
//                                     }}
//                                 >
//                                     {/* CHANGE: Increased size of the box containing the icon */}
//                                     <Box sx={{ width: '60px', height: '60px', bgcolor: 'rgba(255, 193, 7, 0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
//                                         {item.icon}
//                                     </Box>
//                                     <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white', fontSize: '2.35rem' }}> {/* CHANGE: Increased font size */}
//                                         {item.title}
//                                     </Typography>
//                                     <Typography variant="body1" sx={{ color: '#E0E0E0', lineHeight: 1.7, fontSize: '1.5rem' }}> {/* CHANGE: Upgraded variant and increased font size/line height */}
//                                         {item.description}
//                                     </Typography>
//                                 </Box>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Paper>
//             </Container>
//         </Box>
//     );
// };

// export default AakamShine;


import React from 'react';
import { Box, Typography, Grid, Container, Paper } from '@mui/material';

// Import desired icons from Material-UI
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupIcon from '@mui/icons-material/Group';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined';
import PublicIcon from '@mui/icons-material/Public';

const shineItems = [
    {
        // CHANGE: Increased icon font size
        icon: <RocketLaunchIcon sx={{ fontSize: 38, color: '#FFC107' }} />,
        title: "Startup Acceleration",
        description: "Fast-track your startup journey with our comprehensive acceleration program and mentorship."
    },
    {
        // CHANGE: Increased icon font size
        icon: <MonetizationOnIcon sx={{ fontSize: 38, color: '#FFC107' }} />,
        title: "Funding Support",
        description: "Access seed funding, investor networks, and financial planning assistance for your venture."
    },
    {
        // CHANGE: Increased icon font size
        icon: <GroupIcon sx={{ fontSize: 38, color: '#FFC107' }} />,
        title: "Mentor Network",
        description: "Connect with 21+ expert mentors from various industries for guidance and support."
    },
    {
        // CHANGE: Increased icon font size
        icon: <AssessmentIcon sx={{ fontSize: 38, color: '#FFC107' }} />,
        title: "Market Validation",
        description: "Test and validate your business ideas with real market feedback and data analysis."
    },
    {
        // CHANGE: Increased icon font size
        icon: <LightbulbOutlined sx={{ fontSize: 38, color: '#FFC107' }} />,
        title: "Innovation Workshops",
        description: "Participate in ideation sessions, design thinking workshops, and innovation challenges."
    },
    {
        // CHANGE: Increased icon font size
        icon: <PublicIcon sx={{ fontSize: 38, color: '#FFC107' }} />,
        title: "Go-to-Market Strategy",
        description: "Develop effective strategies to launch and scale your product in the market."
    },
];

const AakamShine = () => {
    return (
        <Box sx={{ py: 8, bgcolor: '#ffffff' }}>
            {/* CHANGE: Using maxWidth="xl" for the widest standard container */}
            <Container maxWidth="xl">
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'text.primary',
                        mb: 1,
                        // CHANGE: Increased responsive font size for the main title
                        fontSize: { xs: '2.5rem', sm: '3.25rem', md: '3rem' }
                    }}
                >
                    Aakam Shine
                </Typography>
                <Typography
                    variant="h5" // CHANGE: Increased variant from h6 to h5
                    sx={{
                        textAlign: 'center',
                        color: 'text.secondary',
                        mb: 2, // CHANGE: Increased margin bottom
                        maxWidth: '920px', // CHANGE: Increased max-width for the paragraph
                        mx: 'auto',
                        // CHANGE: Increased responsive font size for the subtitle
                        fontSize: { xs: '1.5rem', md: '1.5rem' }
                    }}
                >
                    Transform Your Innovative Ideas Into Successful Ventures With Our
                    Comprehensive Incubation Program. Get The Support, Resources, And Guidance
                    You Need To Succeed.
                </Typography>

                <Paper
                    elevation={0}
                    sx={{
                        bgcolor: '#1A4D2E',
                        borderRadius: '16px',
                        p: { xs: 3, md: 3 }
                    }}
                >
                    <Grid container spacing={{ xs: 4, md: 4 }}> {/* CHANGE: Increased spacing */}
                        {shineItems.map((item, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <Box
                                    sx={{
                                        bgcolor: 'rgba(255, 255, 255, 0.08)',
                                        borderRadius: '12px',
                                        p: { xs: 3, md: 2 }, // CHANGE: Increased padding
                                        height: '90%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        gap: 2 // CHANGE: Increased gap
                                    }}
                                >
                                    {/* CHANGE: Increased size of the box containing the icon */}
                                    <Box sx={{ width: '60px', height: '60px', bgcolor: 'rgba(255, 193, 7, 0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                                        {item.icon}
                                    </Box>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white', fontSize: '2rem' }}> {/* CHANGE: Increased font size */}
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#E0E0E0', lineHeight: 1.7, fontSize: '1rem' }}> {/* CHANGE: Upgraded variant and increased font size/line height */}
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default AakamShine;