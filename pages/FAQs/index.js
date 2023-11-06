import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import useWindowWidth from "../../components/Hooks/useWindowWidth";

import Options from "../../components/Faq/Options";
import QAs from "../../components/Faq/QAs";
import { Faq } from "../../lib/Faq";
import { HomeData } from "../../lib/HomeData";

export async function getStaticProps() {
  const cats = await fetch(`${process.env.NEXT_API}/wp/v2/categories`).then(
    (result) => result.json()
  );

  const faqs = await fetch(
    `${process.env.NEXT_API}/wp/v2/faq?per_page=100`
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
  console.log(filteredCat);

  return {
    props: {
      faqLists: filteredFaqLists.reverse(),
      questionCat: filteredCat.reverse(),
    },
  };
}

const FAQ = ({ faqLists, questionCat }) => {
  const [catSlug, setCatSlug] = useState(questionCat[0].categorySlug);
  const width = useWindowWidth();
  const [expanded, setExpanded] = useState(null);

  const onSlugSet = (value) => {
    setCatSlug(value);
    setExpanded(null);
  };

  const filteredArr = faqLists.find(
    (list) => list[0].categories_slugs[0] === catSlug
  );

  const getFilteredArr = (slug) => {
    return faqLists.find((list) => list[0].categories_slugs[0] === slug);
  };

  return (
    <FaqContainer>
      <Head>
        <title>{HomeData.tabName.title}</title>
      </Head>
      <FAQHeader>{Faq.title}</FAQHeader>
      {width < 768 ? (
        questionCat.map((qc) => (
          <div key={qc.categorySlug}>
            <CategoryTitle>{qc.categoryName}</CategoryTitle>
            <QAs data={getFilteredArr(qc.categorySlug)} />
          </div>
        ))
      ) : (
        <>
          <Options data={questionCat} onClick={onSlugSet} />
          <QAs
            data={filteredArr}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        </>
      )}
    </FaqContainer>
  );
};

const FaqContainer = styled.div`
  background-color: #ffffff;
  padding: 9.8vh 5.4vw 12.8vh 5.4vw;
  color: #263238;

  @media only screen and (min-width: 768px) {
    padding: 0 20vw 12.8vh 20vw;
  }
`;

const FAQHeader = styled.h1`
  padding: 5vh 0 0 0;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 64px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    padding: 7.2vh 0;
    margin: 0;
  }
`;

const CategoryTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #de3f21;
  padding: 8.5vh 20vw 3.4vh 20vw;
`;

export default FAQ;
