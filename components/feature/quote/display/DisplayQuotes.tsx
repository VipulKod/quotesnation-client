import { Card } from "@/components/ui/card/Card";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const DisplayQuotes = () => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const loader = useRef(null);
  const [limit, setLimit] = useState(10);
  const [reachedEnd, setReachedEnd] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOffset((prevOffset) => prevOffset + 10);
        } else {
          // console.log('Element is not visible');
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  useEffect(() => {
    loadItems();
  }, [offset]);
  // useEffect(() => {

  //   console.log(offset);
  //   loadItems();
  // }, []);

  const loadItems = async () => {
    try {
      let response = await axios.get(`${process.env.API_URL}/quotes`, {
        params: {
          offset,
          limit,
        },
      });
      if (response.data.length > 0) {
        setItems((prevData) => [...prevData, ...response.data]);
      } else {
        setReachedEnd(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {items.map((quote) => (
        <div key={quote.quoteId}>
          <Card isLoading={false}>
            <h2 className="font-serif text-xl font-semibold py-2 text-neutral-700">
              {quote.quote}
            </h2>
            <p className="text-right font-normal">~{quote.author}</p>
          </Card>
        </div>
      ))}

      <div ref={ref}>{!reachedEnd && <Card isLoading={true}> </Card>}</div>
    </>
  );
};

export default DisplayQuotes;
