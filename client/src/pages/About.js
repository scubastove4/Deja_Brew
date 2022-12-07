const About = () => {
  return (
    <div id="aboutContainer">
      <h2>About the Developer</h2>
      <p>
        Hi! I'm Steve Morello, an NYC/LI-based software engineer. This app is my
        second project completed in the General Assembly Software Engineering
        Immersive. The application was created in a week and is built on a
        MERN-stack.
      </p>
      <br />
      <p>
        My inspiration for Déjà Brew is Untappd, an app I use basically every
        weekend to log new beers I've tried. Additional updates include
        incorporating Google Maps to show the location of nearby breweries and
        making the app responsive, so it is more user-friendly on different
        sized devices.
      </p>
      <br />
      <p>Hope you enjoy it!</p>
      <br />
      <p>
        <a href="https://github.com/scubastove4" className="socials">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/stephen-morello/"
          className="socials"
        >
          LinkedIn
        </a>
        <a href="https://twitter.com/scubastove4" className="socials">
          Twitter
        </a>
      </p>
    </div>
  )
}

export default About
