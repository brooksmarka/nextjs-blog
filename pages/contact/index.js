import Layout from "../../components/layout";
import { Linkedin, Mail, Github } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const items = [
    { name: "Email", icon: <Mail className="contactIcon" />, link: "mailto:markabrooks@gmail.com" },
    { name: "LinkedIn", icon: <Linkedin className="contactIcon" />, link: "https://www.linkedin.com/in/brooksmarka/", target: "_blank", rel: "noopener noreferrer"  },
    { name: "Email", icon: <Github className="contactIcon" />, link: "https://github.com/brooksmarka", target: "_blank", rel: "noopener noreferrer"  },
  ];

  return (
    <Layout contact>
      <div className="contactContainer">
        <h1 className="contactTitle">Contact</h1>
        <div className="contactLinkContainer">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="contactLink"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
