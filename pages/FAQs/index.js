import React, { useState, useEffect } from "react";
import OtherHeader from "../../components/Header/OtherHeader";
import Options from "../../components/Faq/Options";

const FAQ = ({ faqLists, questionCat }) => {
  //   const faqCats = faqLists.map((faq) => {
  //     if (faq[0]) {
  //       return {
  //         categoryName: faq[0].categories_names,
  //         categorySlug: faq[0].categories_slugs,
  //       };
  //     }
  //   });
  //   let filteredCat = faqCats.filter((cat) => cat != undefined);

  console.log(questionCat);
  return (
    <div>
      <OtherHeader title={"WMDD FAQs"} page={"faq"} />
      <Options data={questionCat} />
    </div>
  );
};

export default FAQ;

export async function getServerSideProps({ params }) {
  const cats = await fetch(
    "https://api.langara-app.ca/wp-json/wp/v2/categories"
  ).then((result) => result.json());

  const faqs = await fetch(
    "https://api.langara-app.ca/wp-json/wp/v2/faq?per_page=100"
  ).then((result) => result.json());

  const faqLists = cats.map((cat) =>
    faqs.filter((faq) => faq.categories_slugs.find((slug) => slug === cat.slug))
  );

  const faqCats = faqLists.map((faq) => {
    if (faq[0]) {
      return {
        categoryName: faq[0].categories_names.toString(),
        categorySlug: faq[0].categories_slugs.toString(),
      };
      //   return faq[0].categories_names.toString();
    }
  });
  let filteredCat = faqCats.filter((cat) => cat != undefined);

  return {
    props: {
      faqLists: faqLists,
      questionCat: filteredCat,
    },
  };
}
