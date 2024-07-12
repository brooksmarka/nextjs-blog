import Layout from "../../components/layout";
import { Linkedin, Mail, Github } from "lucide-react";
import Link from "next/link";
import Heading from "../../components/Heading";
import FramerWrapper from "../../components/FramerWrapper";

export default function Contact() {
  const items = [
    { name: "Email", icon: <Mail className="contactIcon" />, link: "mailto:markabrooks@gmail.com" },
    { name: "LinkedIn", icon: <Linkedin className="contactIcon" />, link: "https://www.linkedin.com/in/brooksmarka/", target: "_blank", rel: "noopener noreferrer"  },
    { name: "Email", icon: <Github className="contactIcon" />, link: "https://github.com/brooksmarka", target: "_blank", rel: "noopener noreferrer"  },
  ];

  return (
    <Layout contact>
      <div className="contactContainer">
        <Heading>Contact</Heading>
        <FramerWrapper y={0} x={200}>
            <p className="font-poppins text-xl w-full text-primary max-sm:text-base pt-1 pb-6">
             If you have questions or just want to chat feel free to reach out to me via the below channels!
            </p>
          </FramerWrapper>
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
