import isAuthenticated from "@/utils/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.replace("/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};
