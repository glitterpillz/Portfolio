import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/karen-hickey-a2a193341"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <FaLinkedin size={30} />
        </button>
      </a>
      <a
        href="https://github.com/glitterpillz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <FaGithub size={30} />
        </button>
      </a>
    </div>
  );
}

export default Footer;