import React from "react";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  // fetching project category data (Mobile App, Data Visualization App, Hybrid Mobile App)

  const categoryName = params.category;

  const res = await fetch();
  //   Add API to fetch category info
  const category = await res.json();

  return { props: category };
}

const Category = ({ category }) => {
  //   const { query } = useRouter();

  return <div></div>;
};

export default [category];
