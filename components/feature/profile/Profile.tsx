import React from "react";
import { withAuth } from "@/components/hoc/withAuth/WithAuth";

export const Profile = () => {
  return <div>Profile</div>;
};

export default withAuth(Profile);
