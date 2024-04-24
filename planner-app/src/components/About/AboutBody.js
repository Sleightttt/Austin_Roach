const AboutBody = ({ activeTheme }) => {
  const themeFixer = () => {
    let fill = {};
    if (activeTheme === "snow") {
      fill.fill = "#009bef";
      return "#009bef";
    } else if (activeTheme === "summer") {
      fill.fill = "#F4653E";
      return "#F4653E";
    } else if (activeTheme === "spring") {
      fill.fill = "#E5B700";
      return "#E5B700";
    } else if (activeTheme === "fall") {
      fill.fill = "#CA0000";
      return "#CA0000";
    }
    return { fill };
  };

  const { fill } = themeFixer();
  console.log(fill);
  return (
    <div className="about-body fade-in">
      <div className="about-h-box">
        <div style={{ color: themeFixer() }} className="about-h">
          Welcome to my portfolio!
        </div>
      </div>
      <div className="about-p">
        <span style={{ fontWeight: "bold", color: themeFixer() }}>
          Thank you
        </span>{" "}
        for checking out my portfolio! I am a{" "}
        <span style={{ fontWeight: "bold", color: themeFixer() }}>
          software engineer
        </span>{" "}
        with experience in building web applications from the ground up, who
        always finds zeal in debugging errors and finding more efficient
        approach to problems.
      </div>

      <div className="about-p">
        {" "}
        I graduated from App Academy, a highly selective software engineer
        program, where I spent more than 60 hours per week learning and
        mastering my skills in different technologies and computer languages.
        Though challenging, it invigorated my passion for problem solving and
        the desire to keep learning and building my knowledge to become the most
        optimal problem-solver as a programmer. Since graduating I've worked two
        contract roles, one developing an Agile Chatbot for Scrummasters and
        another developing solutions for a medical marketing company. I am
        looking for a full-time opportunity to keep this flame going! Try the{" "}
        <span style={{ fontWeight: "bold", color: themeFixer() }}>
          theme switcher
        </span>{" "}
        at the bottom of the page!
      </div>

      <div className="about-p">
        When I am not coding, I love to indulge myself with horror films, watch
        and play hockey, go on camping adventures to various mountainous
        terrains, game on all systems, and discover new restaurants that awaken
        my palate.
      </div>
      <div className="about-icon-cont">
        <svg
          className="about-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          style={{ ...fill }}
        >
          <path
            fill={themeFixer()}
            d="M20.952,52.828l-0.141,0.145l-0.807,0.821c-1.896,1.896-6.636,1.896-7.584,0.948
	c-0.947-0.948,0-1.914,0-1.914c1.896-1.878,2.844-3.682,2.844-6.144v-7.584V24.882c0-9.163,7.428-16.59,16.589-16.59l0,0
	c9.163,0,16.59,7.428,16.59,16.59v14.219c0,0,0,6.162,0,9.006c0,1.896-0.947,3.792-2.844,5.688
	c-1.896,1.896-6.637,1.896-7.584,0.948s0-1.914,0-1.914c-1.767,1.505-3.142,2.766-5.517,2.766c-2.646,0-4.207-1.33-3.437-2.337
	c-0.813,1.16-3.626,2.337-5.626,2.337C21.25,55.594,19.82,54.489,20.952,52.828z"
          />
          <path
            fill={themeFixer()}
            d="M31.854,8.292c-0.678,0-1.343,0.053-2,0.132c8.218,0.99,14.59,7.974,14.59,16.458v14.219
	c0,0,0,6.162,0,9.006c0,1.896-0.947,3.792-2.844,5.688c-0.674,0.674-1.707,1.104-2.801,1.342c1.696,0.497,5.226,0.233,6.801-1.342
	c1.896-1.896,2.844-3.791,2.844-5.688c0-2.844,0-9.006,0-9.006V24.882C48.444,15.719,41.018,8.292,31.854,8.292z"
          />
          <ellipse fill="#FFFFFF" cx="34.5" cy="37" rx="3.5" ry="5" />
          <ellipse fill="#FFFFFF" cx="29.959" cy="23.459" rx="2.37" ry="4.74" />
          <ellipse fill="#FFFFFF" cx="38.49" cy="23.459" rx="2.37" ry="4.74" />
        </svg>
        <svg
          className="about-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style={{ ...fill }}
        >
          <path
            fill={themeFixer()}
            d="M350.5 33.05c-13.9 30.58-29.4 61.29-61.6 85.35 7.3 3.4 20.7 6.2 27.9 8.5-12.2 18.7-33 36.4-52 52.3 11.1 5.7 22.1 10.3 33.1 14-14.1 22.2-30.9 43.3-51.9 62.4 16.7 9.3 33.3 16.6 49.8 21.8-17.9 25.4-40.4 49.6-72.1 76.1 51.5 26.5 97 38.8 142.2 37.4 1.8 0 3.7.1 5.5.1v-.3c39.9-2.2 79.6-15 123.2-38-38.8-24.5-62.9-47.7-81.4-73.2 17.8-5.2 35.6-12.9 53.3-23.1-25.8-17.7-44.2-38.6-58.9-61.5 12.1-3.7 24.1-8.7 36.1-15-23.2-14.6-44.1-32.3-56.7-51.4 8.8-2.4 22.8-5.3 31.5-9.4-38.5-21.76-48.9-53.16-68-86.05zM173.6 336.8c-.1.3-.4.8-.6 1.1l19.4 139 72.2 1.2c-38.2-44.9-66-91.1-91-141.3zm-.6 1.2c-23.8 47.8-44.8 94.2-86.44 137.2l76.84 1.3zm-20.7 1.1c-24.1 8.9-54.17 16.9-82.31 15.8-11.18 39.8-26.38 80-52.57 115.8l46.65 1.6c43.13-40.8 64.23-85 88.23-133.2zm186.5 68.8l-2.7 70.4 43 .6L373 409c-11.6 0-23.1-.3-34.2-1.1z"
          />
        </svg>
        <svg
          className="about-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -3.84 122.88 122.88"
          fill={themeFixer()}
        >
          <path d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z M65.98,55.65l7.37-8.94C63.87,23.21,99-8.11,116.03,6.29 C136.72,23.8,105.97,66,84.36,55.57l-8.73,11.09L65.98,55.65L65.98,55.65z" />
        </svg>

        <svg
          className="about-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill={themeFixer()}
        >
          <path
            class="st0"
            d="M3.7,31H14c1.8,0,3.5-1.1,4.3-2.7l12-25.6C30.6,1.9,30,1,29.2,1h-1.4c-0.5,0-0.9,0.3-1.1,0.7L16.5,23.9
	c-0.3,0.7-1,1.1-1.7,1.1H5.5c-1.5,0-2.8,0.9-3.2,2.3l-0.4,1.1C1.4,29.7,2.3,31,3.7,31z"
          />
          <path
            class="st0"
            d="M5,15c-2.2,0-4,0.9-4,2v2c0,1.1,1.8,2,4,2s4-0.9,4-2v-2C9,15.9,7.2,15,5,15z"
          />
          <line class="st0" x1="23.3" y1="9" x2="27.3" y2="9" />
        </svg>
      </div>
    </div>
  );
};

export default AboutBody;
