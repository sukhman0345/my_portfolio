import CustomNavbar from "./CustomNavbar";
import "./About.css";
import Footer from "./Footer";

const About = (props) => {
  return (
    <>
      {props.CustomNavbar ? <CustomNavbar /> : "No search bar"}

      <div className="context">
        <div style={{ paddingTop: "0px" }}>
          <h1
            style={{
              textAlign: "center",
              paddingTop: "100px",
              fontFamily: "Inter",
              fontSize: "90px",
            }}
          >
            {props.title}
          </h1>
        </div>

        <div style={{ paddingTop: "30px" }}>
          <p
            style={{
              paddingLeft: "40px",
              paddingRight: "40px",
              fontFamily: "Roboto",
              fontSize: "18px",
            }}
          >
            Hello! I'm <strong className="highlight">Sukhman Singh</strong>, an enthusiastic and dedicated{" "}
            <strong className="highlight">Full-Stack Developer</strong> and aspiring <strong className="highlight">Data Scientist</strong>,
            currently pursuing my <strong className="highlight">Master of Computer Applications</strong> (MCA)
            at GNA University, Phagwara. I specialize in building modern web and{" "}
            <strong className="highlight">mobile applications</strong> using technologies like{" "}
            <strong className="highlight">React.js, Angular.js, Node.js, and MongoDB</strong>, and I have a
            strong interest in{" "}
            <strong className="highlight">
              Python programming and Data Science. Having strong fundamentals
              in concepts of Data Structures
            </strong>
            . My journey in tech has also led me to explore <strong className="highlight">Android development,
            creative UI/UX design</strong> and <strong className="highlight">solving real-world problems</strong>
            through smart and scalable code.
          </p>
        </div>
      </div>

     {/* Expertise Section */}
      <div style={{ padding: "80px 40px", textAlign: "center", background: "#001F3F" }}>
        <h1 style={{ fontSize: "90px", fontFamily: "Inter", color: "white", marginBottom: "40px" }}>{props.title2}</h1>

        <Section title="Web Development" desc="I design and develop responsive and interactive user interfaces using React.js, ensuring a seamless user experience. Additionally, I build scalable backends with Node.js, integrating efficient APIs for dynamic functionality." />
        <Section title="Python & Data Science" desc="With a strong foundation in data structures and algorithms, I analyze complex datasets, build machine learning models, and derive actionable insights using Pandas, NumPy, and Scikit-learn." />
        <Section title="Android Development" desc="I craft intuitive and high-performance Android applications, focusing on clean UI design and smooth functionality to ensure seamless user interactions." />
        <Section title="Data Structures & Algorithms" desc="I have a strong command of data structures and algorithms like arrays, stacks, queues, graphs, and dynamic programming—building efficient, scalable, and optimized solutions." />
      </div>

 {/* Skills Section */}
      <div style={{ padding: "80px 40px", textAlign: "center", background: "#6c757d" }}>
        <h1 style={{ fontSize: "90px", fontFamily: "Inter", color: "white", marginBottom: "40px" }}>{props.title3}</h1>

        <Skill title="Frontend Technologies" skills="HTML, CSS, JavaScript, React.js, Canvas, Bootstrap, Tailwind, Angular.js" />
        <Skill title="Backend Technologies" skills="Node.js, Express.js" />
        <Skill title="Programming Languages" skills="Python, Java, C++, C" />
        <Skill title="Data Science" skills="Pandas, NumPy, Matplotlib, Scikit-learn" />
        <Skill title="Android Development" skills="Java-based Android development" />
        <Skill title="Databases" skills="MongoDB, MySQL" />
        <Skill title="Tools & Platforms" skills="Git, GitHub, VS Code, Android Studio, Postman, Canvas" />
      </div>
      

      <div style={{ paddingTop: "50px" }}>
        <Footer />
      </div>
    </>
  );
};


// Section for expertise with white text
const Section = ({ title, desc }) => (
  <div style={{ marginBottom: "50px" }}>
    <h2 style={{ fontFamily: "Inter", color: "#00d4ff", fontSize: "28px", marginBottom: "15px" }}>{title}</h2>
    <p style={{ fontFamily: "Roboto", color: "white", maxWidth: "900px", margin: "0 auto", fontSize: "18px", lineHeight: "1.7" }}>
      {desc}
    </p>
  </div>
);

// Section for skills with white text
const Skill = ({ title, skills }) => (
  <div style={{ marginBottom: "40px" }}>
    <h2 style={{ fontFamily: "Inter", color: "#ffe600", fontSize: "26px", marginBottom: "10px" }}>{title}</h2>
    <p style={{ fontFamily: "Roboto", color: "white", fontSize: "18px" }}>{skills}</p>
  </div>
);

export default About;
