import React from "react";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";

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

  return (
    <div>
      <Footer />
    </div>
  );
};

export default [category];
