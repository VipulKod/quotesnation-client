import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <>
      <Layout>
        <h1>Login page</h1>
      </Layout>
    </>
  );
}
