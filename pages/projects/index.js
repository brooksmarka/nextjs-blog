import Layout from '../../components/layout';
import FramerWrapper from '../../components/FramerWrapper';
import Heading from "../../components/Heading";
import ProjectCards from '../../components/ProjectsCard';


export default function Projects() {

  const projects = [
    {
      title: "Mud or Hero",
      description:
        "A place to share trail status with your friends",
      tags: ["Typescript", "AWS Amplify", "Mapbox", "Vite"],
      link: "https://github.com/brooksmarka/g2g",
    },
    {
      title: "Trail Creator",
      description:
        "See the gps coordinates of your trail after searching for it",
      tags: ["Typescript", "Express.js", "Node.js", "Vite"],
      link: "https://github.com/brooksmarka/trail-creator",
    },
    {
      title: "Ski Scraper",
      description:
        "A collaborative project which alerted users to Ikon pass reservations",
      tags: ["TelegramBot", "Redis", "Express.js"],
      link: "https://github.com/jbrennan414/ski-scraper",
    },
    {
      title: "Coffee Run",
      description:
        "A simple command-line application to manage coffee orders within a team, track expenses, and determine who should pay next for the coffee run",
      tags: ["Typescript","Express.js","Vite", "Docker"],
      link: "https://github.com/brooksmarka/coffee-run",
    }
  ];
  return (
    <>
    <Layout isProjectPage>
   
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
        <div className="flex flex-col gap-3">
          <Heading>Projects</Heading>
          <FramerWrapper y={0} x={200}>
            <p className="font-poppins text-xl w-full text-primary max-sm:text-base">
             Take a look at my previous projects. Feel free to explore these projects and reach out via the contact page if you have questions!
            </p>
          </FramerWrapper>
        </div>

        <div className="w-full flex flex-row flex-wrap gap-3 justify-center max-lg:flex-col">
          {projects.map((val, indx) => {
            return <ProjectCards key={indx} value={val} num={indx} />;
          })}
        </div>
      </div>
    </Layout>
    </>
  );
}