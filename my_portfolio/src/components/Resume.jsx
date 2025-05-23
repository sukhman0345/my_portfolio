import CustomNavbar from "./CustomNavbar";
import Button from 'react-bootstrap/Button';
import resume from '../components/images/Sukhman_Singh.pdf';
import Footer from "./Footer";

const Resume = () => {
  return (
    <>
      <CustomNavbar />
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          fontFamily: "Inter, sans-serif",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "150px 20px 80px"
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "20px" }}>
          Here is my uploaded CV!
        </h1>

        <Button
          variant="success"
          style={{
            fontSize: "1.1rem",
            padding: "12px 24px",
            borderRadius: "30px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s ease-in-out"
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <a
            href={resume}
            download="Sukhman_Singh_Resume.pdf"
            style={{
              textDecoration: "none",
              color: "white"
            }}
          >
            Download Resume/CV
          </a>
        </Button>
      </div>

      <div style={{ marginTop: "-80px" }}>
        <Footer />
      </div>
    </>
  );
};

export default Resume;
