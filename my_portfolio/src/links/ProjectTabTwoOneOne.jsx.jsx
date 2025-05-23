import { Box, Typography, Container } from "@mui/material";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

import Image1 from "../components/link_images/projectTab2_1_1.png";
import Image2 from "../components/link_images/projectTab2_1_2.png";
import Image3 from "../components/link_images/projectTab2_1_3.png";
import Image4 from "../components/link_images/projectTab2_1_4.png";
import Image5 from "../components/link_images/projectTab2_1_5.png";
import Image6 from "../components/link_images/projectTab2_1_6.png";
import Image7 from "../components/link_images/projectTab2_1_7.png";
import Image8 from "../components/link_images/projectTab2_1_8.png";
import Image9 from "../components/link_images/projectTab2_1_9.png";
import Image10 from "../components/link_images/projectTab2_1_10.png";
import Image11 from "../components/link_images/projectTab2_1_11.png";
import Image12 from "../components/link_images/projectTab2_1_12.png";

const projectTab2_1_1 = () => {
  return (
    <Container maxWidth="xl" sx={{ overflow: "hidden", padding: 0 }}>
      {/* Header Section */}
      <Box textAlign="center" py={4}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#1976d2",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          🌱 Sustained Growth – A MERN Stack-Based Consultancy Calculator
          Project
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "80%",
            margin: "auto",
            color: "#555",
          }}
        >
          🔧 Backend: The backend is built using Node.js with Express.js as the
          server-side framework. I used Handlebars (hbs) as the templating
          engine to render dynamic HTML pages effectively. 🗄️ Database: MongoDB
          is integrated for backend data storage, where user interactions or
          history (if extended) can be stored and retrieved efficiently. 🌐
          Frontend: While the primary UI focuses on clean and responsive design
          using HTML, CSS, and JavaScript, the integration with Handlebars
          allows dynamic rendering of components from the backend.
        </Typography>
      </Box>

      {/* Images Section */}
      <Box display="flex" flexDirection="column" alignItems="center">
        {[
          Image1,
          Image2,
          Image3,
          Image4,
          Image5,
          Image6,
          Image7,
          Image8,
          Image9,
          Image10,
          Image11,
          Image12,
        ].map((img, index) => (
          <Box
            key={index}
            sx={{
              width: "90vw",
              height: "80vh",
              margin: "5vh auto",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f9f9f9",
              borderRadius: "20px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={img}
              alt={`Project Screenshot ${index + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius: "15px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Footer Section */}
      <Box
        component="footer"
        sx={{
          background: "black",
          padding: "30px 0",
          color: "white",
          textAlign: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "900px",
            width: "100%",
            padding: "0 20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#ffcc33 !important" }}
          >
            LOGO
          </Typography>

          <Box sx={{ display: "flex", gap: "10px" }}>
            <a
              href="https://www.linkedin.com/in/sukhman012358/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} color="white" />
            </a>
            <a
              href="https://www.instagram.com/sukhman_saini30/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} color="white" />
            </a>
            <a
              href="https://www.instagram.com/sukhman_saini30/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} color="white" />
            </a>
            <a
              href="https://github.com/sukhman0345"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} color="white" />
            </a>
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{ marginTop: "20px", fontSize: "16px" }}
        >
          Copyright © 2025. Sukhman Singh
        </Typography>
      </Box>
    </Container>
  );
};

export default projectTab2_1_1;
