import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";

const mockArticles = [
  {
    id: 1,
    title: "Fall of Constantinople (1453)",
    excerpt:
      "The conquest of Constantinople by the Ottoman Empire marked the end of the Byzantine era.",
    period: "Middle Ages",
  },
  {
    id: 2,
    title: "The Roman Republic",
    excerpt:
      "From monarchy to republic — how Rome laid foundations for modern governance.",
    period: "Ancient World",
  },
  {
    id: 3,
    title: "French Revolution",
    excerpt:
      "Liberty, equality, fraternity — a turning point in European history.",
    period: "Modern Era",
  },
  {
    id: 4,
    title: "Battle of Kosovo (1389)",
    excerpt:
      "A legendary battle with deep historical and cultural significance in the Balkans.",
    period: "Middle Ages",
  },
  {
    id: 5,
    title: "Abbasid Golden Age",
    excerpt:
      "Science, philosophy and culture flourished in the Islamic world.",
    period: "Medieval Islamic World",
  },
];

const Articles = () => {
  return (
    <Box sx={{ width: "100vw", py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Articles
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
      >
        Explore curated historical articles from different eras and regions.
      </Typography>

      <Container maxWidth={false}>
        <Grid container spacing={4} sx={{ px: 6 }}>
          {mockArticles.map((article) => (
            <Grid item xs={12} md={4} key={article.id}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {article.excerpt}
                    </Typography>
                    <Typography variant="caption" color="primary">
                      {article.period}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Articles;
