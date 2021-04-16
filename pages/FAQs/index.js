import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OtherHeader from "../../components/Header/OtherHeader";
import Options from "../../components/Faq/Options";
import QAs from "../../components/Faq/QAs";
// import { styled } from "@material-ui/core";

export async function getStaticProps() {
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
    }
  });
  let filteredFaqLists = faqLists.filter((faq) => faq.length !== 0);
  let filteredCat = faqCats.filter((cat) => cat != undefined);

  return {
    props: {
      faqLists: filteredFaqLists.reverse(),
      questionCat: filteredCat.reverse(),
    },
  };
}

const FAQ = ({ faqLists, questionCat }) => {
  const [catSlug, setCatSlug] = useState(questionCat[0].categorySlug);

  const onSlugSet = (value) => {
    setCatSlug(value);
  };

  const filteredArr = faqLists.find(
    (list) => list[0].categories_slugs[0] === catSlug
  );

  return (
    <FaqContainer>
      <OtherHeader title={"WMDD FAQs"} page={"faq"} />
      <Options data={questionCat} onClick={onSlugSet} />
      <QAs data={filteredArr} />
    </FaqContainer>
  );
};

const FaqContainer = styled.div`
  padding: 0 2rem;

  @media only screen and (min-width: 768px) {
    padding: 0;
  }
`;

export default FAQ;
