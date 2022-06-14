import Link from "next/link";
import { server } from "../../../config/index";
import { useRouter } from "next/router";

const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <h2> {article.title}</h2>
      <p> {article.body}</p>
      <Link href="/">
        <h2>Go Back</h2>
      </Link>
    </>
  );
};

// this is the second method of fetching data on demand

// export const getStaticProps = async (context) => {
//   const res = await fetch(`${server}${context.params.id}`);
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default article;
