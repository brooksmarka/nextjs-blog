import Layout from "../../components/layout"
import Heading from "../../components/Heading"
import FramerWrapper from "../../components/FramerWrapper"

export default function About() {
    return (
        <Layout contact>
          <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <div>
            <Heading>About</Heading>
            <FramerWrapper y={0} x={200}>
              <p className="font-poppins text-lg w-full text-primary max-sm:text-base py-1">I started my professional software development career in 2018 after a 9 year career in software sales. Since then I have worked as a full stack software engineer. This has really allowed me to work in a lot of different areas and languages. I have expertise in Typescript and React as well as experience working with Java, Golang and PHP.</p>
              <p className="font-poppins text-lg w-full text-primary max-sm:text-base py-1">I really enjoy working on projects which show data in an interesting and new way to users.  Currently I'm sort of obsessed with mapping technology and how to show hard to parse data in interesting ways on a map.</p>
              <p className="font-poppins text-lg w-full text-primary max-sm:text-base py-1">Feel free to visit my projects tab to learn more about what I have been up to recently as well as my recent blog posts.  Whenever I learn something new or interesting my goal is to write about it.  Not only to share the knowledge but as a way of solidifying it in my brain as well.</p>
              <p className="font-poppins text-lg w-full text-primary max-sm:text-base pt-1">If you have questions please feel free to reach out to me via my contact page!</p>
            </FramerWrapper>
            </div>
          </div>
        </Layout>
      )
  }