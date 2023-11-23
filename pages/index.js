import React from "react";
import { Button, Pane, SearchInput, SelectMenu } from "evergreen-ui";
import DashboardSearch from "@/components/Dashboard/DashboardSeach";

export default function Home() {
  const [selected, setSelected] = React.useState(null);
  return (
    <Pane display="flex" justifyContent="center" alignItems="center">
      <Pane width="100%" maxWidth="580px">
        <DashboardSearch />
      </Pane>
    </Pane>
  );
}
