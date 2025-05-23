import { Box, Typography, Container } from "@mui/material";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

import Image1 from "../components/link_images/project3_1.png";
import Image2 from "../components/link_images/project3_2.png";
import Image3 from "../components/link_images/project3_3.png";
import Image4 from "../components/link_images/project3_4.png";

const Project4Info = () => {
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
          Chatboat
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
          I have built an interactive Chatbot based on HTML, CSS, and JavaScript
          for the front end. The chatbot offers intelligent and intuitive
          communication with users, providing a rich user experience. For the
          backend smarts, I added the chatbot to Google AI Studio, where I
          created and adapted an API powered by Gemini AI. The API allows the
          chatbot to recognize user questions and answer appropriately using
          sophisticated natural language processing. With its clean and simple
          interface, this chatbot can be included in any web page to immediately
          assist or supply information to customers. The frontend design
          combined with robust AI ability makes it one excellent example of AI
          and modern web integration.
        </Typography>
      </Box>

      {/* Images Section */}
      <Box display="flex" flexDirection="column" alignItems="center">
        {[Image1, Image2, Image3, Image4].map((img, index) => (
          <Box
            key={index}
            sx={{
              width: "90vw", // Reduced width for side margins
              height: "90vh", // Slightly smaller height to make space
              margin: "5vh auto", // Adds space between images
              padding: "20px", // Adds padding inside the image box
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={img}
              alt={`Currency Converter ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "15px",
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
          width: "100%", // Fix full-width issue
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "900px",
            width: "100%", // Ensures it aligns properly
            padding: "0 20px", // Prevents unwanted spacing
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

export default Project4Info;
