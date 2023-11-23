import React, { useEffect, useState } from "react";
import { Pane } from "evergreen-ui";
import DashboardSearch from "@/components/Dashboard/DashboardSeach";
import MainCard from "@/components/MainCard";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Pane display="flex" justifyContent="center" alignItems="center">
          <Pane width="100%" maxWidth="580px">
            <DashboardSearch />
            <MainCard />
            <MainCard />
          </Pane>
        </Pane>
      )}
    </>
  );
}
