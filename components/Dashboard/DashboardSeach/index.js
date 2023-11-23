import React from "react";
import { Button, Pane, SearchInput, SelectMenu, Text } from "evergreen-ui";
import { provinsi } from "daftar-wilayah-indonesia";

const DashboardSearch = () => {
  const [selectedBulan, setSelectedBulan] = React.useState(null);
  const [selectedDaerah, setSelectedDaerah] = React.useState(null);

  const monthData = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const nowMonth = new Date().getMonth();

  const dataProvinsi = provinsi();

  return (
    <Pane display="flex" flexDirection="column" gap={8}>
      <SearchInput width="100%" placeholder="Yuk Cari Event Jejepangannya" />
      <Pane display="flex" gap={5}>
        <SelectMenu
          title="Bulan"
          options={monthData.map((label) => ({ label, value: label }))}
          selected={selectedBulan}
          onSelect={(item) => setSelectedBulan(item.value)}
        >
          <Button width="100%">{selectedBulan || monthData[nowMonth]}</Button>
        </SelectMenu>
        <SelectMenu
          title="Provinsi"
          options={dataProvinsi?.map((label) => ({
            label: label.nama,
            value: label.nama,
          }))}
          selected={selectedDaerah}
          onSelect={(item) => setSelectedDaerah(item.value)}
        >
          <Button width="100%">{selectedDaerah || "Daerah"}</Button>
        </SelectMenu>
      </Pane>
      <Text color="muted">
        Event : Bulan{" "}
        {selectedBulan === null ? monthData[nowMonth] : selectedBulan}{" "}
        {selectedDaerah !== null && `Di ${selectedDaerah}`}
      </Text>
    </Pane>
  );
};

export default DashboardSearch;
