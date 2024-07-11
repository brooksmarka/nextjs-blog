import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link';
import Date from '../../components/date';

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
        <section className={`${utilStyles.headingBlog} ${utilStyles.padding1px}`}>
            <h2>Blog</h2>
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
        </section>
        </Layout>
      )
  }