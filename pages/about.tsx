import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Layout>
        <h1>About page</h1>
      </Layout>
    </>
  );
}
