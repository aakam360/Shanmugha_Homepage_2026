"use client";

// components/home/institution-intro.js
import {
  useMediaQuery,
  useTheme,
  Grid,
  Box,
  Card,
  CardContent,
  Divider,
  Container,
  Typography,
} from "@mui/material";
import Link from "next/link";

// Define the marquee animation keyframes
const marqueeKeyframes = {
  "@keyframes marquee": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(-100%)" },
  },
};

const InstitutionIntro = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const announcementText =
    "Admissions for the academic year 2026-2027 are now open! ✨ New courses launched in Artificial Intelligence and Data Science.";

const newsData = [
    { date: "Tue, 20/01/2026 - 09:30", title: "Inaguration Cermony-Dr.V.Irai Anbu Mentoring Programme" },
    { date: "Wed, 28/01/2026 - 10:30", title: "Siragai Viri Uyara Para" },
    { date: "Tue, 20/01/2026 - 09:00", title: "4th National Pharmacy Week Celebration -Arokyam'25" },
    { date: "Fri, 05/12/2025 - 11:30", title: "Valedictory Cermony" },
    { date: "Sun, 07/12/2025 - 10:30", title: "Parents fest '25!" },
    { date: "Wed, 24/12/2025 - 09:00", title: "Neptune'25 and Kalam '25" },
  ]

  return (
    <div className="institution-intro">
      {/* === MAIN WRAPPER (for header scroll detection) === */}
      <Box
        component="section"
        sx={{ backgroundColor: "#f8f9fa", pt: 0, pb: { xs: 6, md: 15 } }}
      >
        {/* === ANNOUNCEMENT MARQUEE === */}
        <Box
          sx={{
            backgroundColor: "#fdb813",
            color: "#0c6bd8f7",
            py: 0.5,
            px: 0.5,
            overflow: "hidden",
            whiteSpace: "nowrap",
            ...marqueeKeyframes,
          }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{
              display: "inline-block",
              pl: "100%",
              animation: "marquee 25s linear infinite",
              fontSize: { xs: "1.5rem", md: "1.6rem" },
              fontWeight: "500",
              "&:hover": { animationPlayState: "paused" },
            }}
          >
            {announcementText}
          </Typography>
        </Box>

        {/* === MAIN INTRO SECTION === */}
        <Container
          maxWidth={false}
          sx={{ pt: { xs: 6, md: 8 }, px: { xs: 3, md: 5 } }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "#002b6b",
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: "bold",
            }}
          >
            <Box
              component="span"
              sx={{
                display: "block",
                fontSize: { xs: "1.5rem", md: "4.5rem" },
                fontWeight: 50,
                color: "#002b6b",
              }}
            >
              Welcome to
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: { xs: "2.2rem", md: "5.5rem" },
                lineHeight: 1.2,
              }}
            >
              Sri Shanmugha Educational Institutions
            </Box>
          </Typography>

          <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
            {/* --- UPDATED: Grid item set to 3 columns for 1:3 ratio --- */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  component="img"
                  src="/assets/images/logo/15 years logo-01.png"
                  alt="Sri Shanmugha Educational Institutions Logo"
                  sx={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: { xs: "460px", md: "560px" },
                  }}
                />
              </Box>
            </Grid>

            {/* --- UPDATED: Grid item set to 9 columns for 1:3 ratio --- */}
            <Grid size={{ xs: 12, md: 9 }}>
              <Typography
                component="p"
                sx={{
                  fontSize: {
                    xs: "1.3rem",
                    sm: "1.6rem",
                    md: "2.2rem",
                    lg: "2rem",
                  },
                  lineHeight: 1.8,
                  color: "#555",
                  textAlign: "justify",
                }}
              >
                Fifteen years ago, on 120 acres of green land, a dream was born
                — a dream to change lives through education. It was not just
                about building classrooms and labs, but about opening doors,
                creating opportunities, and helping every student grow. This
                vision came from Thiru K. Shanmugham, who believed that good
                education should not be only for a few, but for every student,
                no matter where they come from. In 2010, this vision became
                reality as the Sri Shanmugha Educational Institutions. Built
                with courage, care, and a strong mission to uplift society, the
                institution continues to guide thousands of students to dream
                big, aim high, and achieve more.
              </Typography>
            </Grid>
          </Grid>
        </Container>

        {/* === LATEST NEWS SECTION === */}
        <Container
          maxWidth="lg"
          sx={{ mt: { xs: 4, md: 8 }, mb: { xs: 6, md: 10 } }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#002b6b",
              mb: 4,
              textAlign: "left",
              fontSize: { xs: "2.2rem", md: "3rem" },
            }}
          >
            Latest{" "}
            <Box component="span" sx={{ color: "#0071ce" }}>
              NEWS
            </Box>
          </Typography>

          <Grid container spacing={4}>
            {/* === LEFT (Main News Card) === */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  overflow: "hidden",
                  height: { xs: "auto", md: "520px" },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  component="img"
                  src="/assets/images/natarajan.jpeg"
                  alt="Latest News"
                  sx={{
                    width: "100%",
                    height: { xs: "auto", md: "70%" },
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    backgroundColor: "#f4f5f7",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    px: { xs: 2, md: 3 },
                    py: { xs: 2, md: 2 },
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mb: 0.5, fontSize: { xs: "0.9rem", md: "1rem" } }}
                  >
                    Mon, 19/01/2025
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#002b6b",
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: "1.4rem", md: "1.6rem" },
                    }}
                  >
                    Welcome Our Brand Ambassador
                  </Typography>
                  {/* <Typography
                    component="a"
                    href="https://www.figma.com/design/cWdSpdIVvDboRfNhof56QF/SSEI?node-id=0-1&p=f"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#f25c05",
                      fontWeight: 600,
                      cursor: "pointer",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Read More →
                  </Typography> */}
                </CardContent>
              </Card>
            </Grid>

            {/* === RIGHT (Auto Scroll News) === */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  height: { xs: "auto", md: "400px" },
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                {/* Header */}
                <Box
                  sx={{
                    backgroundColor: "#002b6b",
                    color: "#fff",
                    py: 1.5,
                    px: 2,
                    fontWeight: 700,
                    fontSize: "1.2rem",
                  }}
                >
                  NEWS UPDATE
                </Box>

                {/* Auto-scroll list */}
                <Box
                  sx={{
                    position: "relative",
                    flexGrow: 1,
                    overflow: "hidden",
                    height: { xs: "300px", md: "440px" },
                    "&:hover .scroll-content": { animationPlayState: "paused" },
                  }}
                >
                  <Box
                    className="scroll-content"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      animation: "scroll-up 25s linear infinite",
                      "@keyframes scroll-up": {
                        "0%": { transform: "translateY(0)" },
                        "100%": { transform: "translateY(-50%)" },
                      },
                    }}
                  >
                    {[...Array(2)].map((_, idx) => (
                      <Box key={idx}>
                        {newsData.map((news, i) => (
                          <Box key={`${idx}-${i}`} sx={{ mb: 2, px: 2 }}>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ mb: 0.5, fontSize: "1.4rem" }}
                            >
                              {news.date}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                fontWeight: 600,
                                fontSize: "1.25rem",
                                color: "#002b6b",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  color: "#0071ce",
                                  fontSize: "1rem",
                                },
                              }}
                            >
                              {news.title}
                            </Typography>
                            {i < newsData.length - 1 && (
                              <Divider sx={{ my: 1 }} />
                            )}
                          </Box>
                        ))}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default InstitutionIntro;
