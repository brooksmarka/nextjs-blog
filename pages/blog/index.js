import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link';
import Date from '../../components/date';
import Heading from '../../components/Heading';
import FramerWrapper from '../../components/FramerWrapper';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }
  

export default function Blog({allPostsData}) {
    return (
        <Layout contact>
          <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Heading>Blog</Heading>
            <FramerWrapper y={0} x={200}>
              <p className="font-poppins text-xl w-full text-primary max-sm:text-base pb-2">
              I write about my projects and other stuff here
              </p>
            </FramerWrapper>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                      <Link href={`/posts/${id}`}>{title}</Link>
                      <br />
                      <small className={utilStyles.lightText}>
                          <Date dateString={date} />
                      </small>
                  </li>
              ))}
            </ul>
          </div>
        </Layout>
      )
  }