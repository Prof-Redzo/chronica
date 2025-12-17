import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";

const Home = () => {
  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundColor: "#f5f1e8",
          py: 10,
          textAlign: "center",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Chronica
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Where history lives and stories are written by time.
        </Typography>
      </Box>

      {/* CONTENT */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Explore the Past
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
        >
          Chronica is a place for history lovers — ancient civilizations,
          medieval empires, greate events and forgotten stories of mankind.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Ancient World
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Egypt, Rome, Greece, Mesopotamia and the birth of civilization.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Middle Ages
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Knights, sultans, empires and turning points.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Modern Era
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Revolutions, wars and the shaping of the modern world.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
