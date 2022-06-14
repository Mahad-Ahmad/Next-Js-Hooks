import Head from "next/head";
import { server } from "../config/index";
import ArticleList from "../components/ArticleList";
import styles from "../styles/Layout.module.css";

export default function Home({ articles }) {
  return (
    <div>
      <h1>Welcome to Next</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
