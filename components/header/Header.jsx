/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import agri_mall_logo from "../../public/agrimall_onlylogo.png";
import useScrollPosition from "../hooks/useScrollPosition";
import { Link as ScrollLink } from "react-scroll";
// import { Link } from "react-router-dom";

const navItems = [
  {
    id: 1,
    title: "About Us",
    link: "about",
  },
  {
    id: 2,
    title: "Products",
    link: "products",
  },
];

const Header = (props) => {
  const { scrollY } = useScrollPosition();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const renderLogo = () => (
    <img
      src={agri_mall_logo}
      alt="Agri Mall"
      style={{
        width: "auto",
        height: "80px",
        marginTop: "15px",
      }}
    />
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          height: "100px",
          bgcolor: props.home && scrollY === 0 ? "transparent" : "white",
          transition: "background-color 0.3s ease-in-out",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          >
            {renderLogo()}
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.link}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{
                  cursor: "pointer",
                  margin: "0 15px",
                  color:
                    props.home === true && scrollY === 0 ? "white" : "black",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontFamily:"Arial",
                }}
              >
                {item.title}
              </ScrollLink>
            ))}

            {/*for desktop view */}
            <a
              // href="https://limspakistan.org/desiltingapp.apk"
              href="/agrimallapp.apk"
              download="agrimallapp.apk"
              style={{
                display: "inline-block",
                cursor: "pointer",
                padding: "10px 20px",
                margin: "0 15px",
                backgroundColor: "#198754",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                textDecoration: "none",
                transition: "background-color 0.3s ease",
                fontFamily:"Arial",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#155d40";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#198754";
              }}
              onTouchStart={(e) => {
                e.target.style.backgroundColor = "#155d40";
              }}
              onTouchEnd={(e) => {
                e.target.style.backgroundColor = "#198754";
              }}
            >
              Download App
            </a>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 300,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              {renderLogo()}
            </Typography>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item.id}>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ScrollLink
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      <ListItemText
                        primary={
                          <span
                            style={{
                              fontFamily:"Arial",
                              fontWeight: "bold",
                              color: "#372d21",
                            }}
                          >
                            {item.title}
                          </span>
                        }
                      />
                    </ScrollLink>
                  </ListItemButton>
                </ListItem>
              ))}
              <Divider />

              {/* for mobile screen */}
              <ListItem>
                <a
                  // href="https://limspakistan.org/desiltingapp.apk"
                  href="/agrimallapp.apk"
                  download="agrimallapp.apk"
                  style={{
                    display: "inline-block",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "100%",
                    backgroundColor: "#198754",
                    borderRadius: "10px",
                    padding: "8px 0px",
                    transition: "background-color 0.3s ease",
                    fontFamily:"Arial",
                  }}
                >
                  Download App
                </a>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
