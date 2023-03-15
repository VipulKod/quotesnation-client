import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import Profile from "@/components/feature/profile/Profile";

const inter = Inter({ subsets: ["latin"] });

export default function UserProfile() {
  return (
    <>
      <Layout>
        <Profile />
      </Layout>
    </>
  );
}
