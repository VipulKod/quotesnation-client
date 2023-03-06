import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Register() {
  return (
    <>
      <Layout>
        <h1>Register Page</h1>
      </Layout>
    </>
  );
}
