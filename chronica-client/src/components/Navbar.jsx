import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        backgroundColor: "#111",
        px: 2,
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1400px",
          width: "100%",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          Chronica
        </Typography>

        {/* NAV LINKS */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} to="/articles" sx={navButtonStyle}>
            Articles
          </Button>

          <Button component={Link} to="/blog" sx={navButtonStyle}>
            Blog
          </Button>

          {!token ? (
            <>
              <Button
                component={Link}
                to="/login"
                sx={navButtonStyle}
              >
                Login
              </Button>

              <Button
                component={Link}
                to="/register"
                sx={{
                  ...navButtonStyle,
                  border: "1px solid #fff",
                }}
              >
                Register
              </Button>
            </>
          ) : (
            <Button
              onClick={handleLogout}
              sx={{
                ...navButtonStyle,
                border: "1px solid #fff",
              }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const navButtonStyle = {
  color: "#fff",
  textTransform: "none",
  fontSize: "0.95rem",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
  },
};

export default Navbar;
