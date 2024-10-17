import Layout from '../../components/layout'
import Heading from '../../components/Heading'
import FramerWrapper from '../../components/FramerWrapper'

export default function About() {
  return (
    <Layout contact>
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
        <div>
          <Heading>About</Heading>
          <FramerWrapper y={0} x={200}>
            <p className="font-poppins text-lg w-full text-primary max-sm:text-base py-1">
              I'm Mark, a software engineer with a passion for creating digital
              solutions that make a real difference in people’s lives. With
              expertise across full-stack development and a background in
              software sales, I’ve spent my career refining the user experience
              of high-traffic applications and solving technical challenges.
            </p>
            <p className="font-poppins text-lg w-full text-primary max-sm:text-base py-1">
              Whether it’s architecting resilient systems, reducing technical
              debt, or designing intuitive user interfaces, I enjoy turning
              complex problems into simple, user-centered solutions.
            </p>
            <p className="font-poppins text-lg w-full text-primary max-sm:text-base py-1">
              When I’m not coding, I’m likely outside, mountain biking, skiing,
              gardening or hiking with my wife and dog.
            </p>
            <p className="font-poppins text-lg w-full text-primary max-sm:text-base py-1">
              Feel free to visit my projects tab to learn more about what I have
              been up to recently as well as my recent blog posts. Whenever I
              learn something new or interesting my goal is to write about it.
              Not only to share the knowledge but as a way of solidifying it in
              my brain as well.
            </p>
            <p className="font-poppins text-lg w-full text-primary max-sm:text-base py-1">
              If you have questions please feel free to reach out to me via my
              contact page!
            </p>
          </FramerWrapper>
        </div>
      </div>
    </Layout>
  )
}
