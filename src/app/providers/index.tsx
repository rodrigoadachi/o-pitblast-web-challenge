"use client";
import { ApolloProvider } from "@apollo/client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { client } from "../services/graphql";
import { AuthProvider } from "../context/auth";
import { checkIsPublicRoute } from "../functions/checkIsPublicRoute";
import PrivateRoute from "../Components/PrivateRoute";
import Header from "../Components/Layout/Header";

export const Providers = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isPublicPage = checkIsPublicRoute(pathname!);
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <main>
          <div>
            {isPublicPage && <div className="w-screen h-full">{children}</div>}
            {!isPublicPage && (
              <PrivateRoute>
                <Header />
                <div className="flex-grow overflow-x-hidden overflow-y-auto pt-[64px] bg-static bg-cover bg-center bg-fixed min-w-screen min-h-screen">
                  {children}
                </div>
              </PrivateRoute>
            )}
          </div>
        </main>
      </AuthProvider>
    </ApolloProvider>
  );
};
