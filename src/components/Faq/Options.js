import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CommonStyling } from "../../lib/CommonStyling";
import Link from "next/link";
import { useRouter } from "next/router";

const Options = ({ data, onClick }) => {
  const [checkedIndex, setCheckedIndex] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) {
      onClick(data[0].categorySlug);
      setCheckedIndex(1);
    } else {
      const chIdx = data.findIndex((obj) => obj.categorySlug == hash) + 1;
      onClick(hash);
      setCheckedIndex(chIdx);
    }
  }, []);


  // sets correct variables when the hash changes using the router.method -> used in faq answers with anchor tags
  useEffect(() => {
    const handleHashChange = (url) => {
      const hash = window.location.hash.slice(1);
      if (!hash) {
        onClick(data[0].categorySlug);
        setCheckedIndex(1);
      } else {
        const chIdx = data.findIndex((obj) => obj.categorySlug == hash) + 1;
        onClick(hash);
        setCheckedIndex(chIdx);
      }
    };

    // Register the hash change event listener
    router.events.on("hashChangeComplete", handleHashChange);

    // Cleanup the event listener
    return () => {
      router.events.off("hashChangeComplete", handleHashChange);
    };
  }, [router.events, onClick, data]);




  const scrutinizer = (val) => {
    return parseInt(val.split(" ")[2]);
  };

  const setCat = (values) => {
    onClick(values.id);
    setCheckedIndex(scrutinizer(values.className));
  };

  return (
    <Container>
      {data.map((q, index) => (
        <Link key={index} href={"#" + q.categorySlug}>
          <CategoryName
            onClick={(e) => {
              setCat(e.target);
            }}
            id={q.categorySlug}
            className={index + 1}
            data-number={index + 1}
            checked={checkedIndex}
          >
            {q.categoryName}
          </CategoryName>
        </Link>
      ))}
    </Container>
  );
};

const CategoryName = styled.p`
  text-align: center;
  font-size: ${CommonStyling.body1FontSize};
  color: ${(allProps) =>
    allProps["data-number"] === allProps["checked"] ? "#F15A22" : "#37474F"};
  font-weight: ${(allProps) =>
    allProps["data-number"] === allProps["checked"] ? 600 : 200};
  border-bottom: ${(allProps) =>
    allProps["data-number"] === allProps["checked"]
      ? "3px solid #F15A22"
      : "none"};
  padding: 0.8rem;
  cursor: pointer;
  margin-bottom: 2.8vh;
  margin-top: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Options;
