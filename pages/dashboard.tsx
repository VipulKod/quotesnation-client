import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card/Card";
import { Chip } from "@/components/ui/chip/Chip";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getAllQuotes();
  }, []);

  const getAllQuotes = async () => {
    try {
      let response = await axios.get(`${process.env.API_URL}/quotes`);
      console.log(response);
      if (response.data) {
        setQuotes(response.data);
        console.log(quotes);
      }
      //   router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const [selectedChip, setSelectedChip] = useState("Chip 1");

  const handleChipClick = (label) => {
    setSelectedChip(label);
  };

  return (
    <>
      <Layout>
        <div className="grid grid-cols-4 h-screen mt-4">
          <div className="col-span-1 mx-2">
            <h1 className="font-serif font-semibold text-2xl">Categories</h1>
          </div>
          <div className="col-span-2">
            <div>
              {quotes.length > 0 &&
                quotes.map((quote) => (
                  <div key={quote.quoteId}>
                    <Card>
                      <h2 className="font-serif text-xl font-semibold py-2 text-neutral-700">
                        &quot; {quote.quote} &quot;
                      </h2>
                      <p className="text-right font-normal">~{quote.author}</p>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-span-1">asd</div>
        </div>
      </Layout>
    </>
  );
}
