import DisplayQuotes from "@/components/feature/quote/display/DisplayQuotes";
import { withAuth } from "@/components/hoc/withAuth/WithAuth";
import { Layout } from "@/components/Layout";

function Dashboard() {
  return (
    <>
      <Layout>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-screen mt-4">
          <div className="col-span-1 mx-2">
            {/* <h1 className="font-serif font-semibold text-2xl">Categories</h1> */}
          </div>
          <div className="col-span-2">
            <DisplayQuotes />
          </div>
          <div className="col-span-1"></div>
        </div>
      </Layout>
    </>
  );
}

export default withAuth(Dashboard);
