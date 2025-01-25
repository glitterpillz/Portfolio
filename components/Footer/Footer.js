import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex gap-5 m-3">
      <a
        href="https://www.linkedin.com/in/karen-hickey-a2a193341"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="softNeonBorder bg-white text-black">
          <FaLinkedin size={30} />
        </button>
      </a>
      <a
        href="https://github.com/glitterpillz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="softNeonBorder bg-white text-black">
          <FaGithub size={30} />
        </button>
      </a>
    </div>
  );
}

export default Footer;