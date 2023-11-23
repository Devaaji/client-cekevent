import React, { useState } from "react";
import { Card, Dialog, Heading, Pane, Paragraph } from "evergreen-ui";
import Image from "next/image";
import ImageExample from "../../assets/img/Tomodachi-no-Matsuri.jpg";

const MainCard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <Card
      elevation={1}
      marginTop="8px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "220px",
          cursor: "pointer",
        }}
        onClick={openDialog}
      >
        <Image
          src={ImageExample}
          alt="Gambar"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          borderRadius={8}
        />
      </div>
      <Pane border="1px solid black" width="100%" padding="2px">
        <Heading size={400}>Tomodachi on Matsuri</Heading>
        <Paragraph size={300} color="muted">
          Deskripsi card yang singkat dan informatif.
        </Paragraph>
      </Pane>

      <Dialog
        isShown={isDialogOpen}
        title="Gambar Penuh"
        onCloseComplete={closeDialog}
        hasFooter={false}
        shouldCloseOnOverlayClick={true}
      >
        <Image
          src={ImageExample}
          alt="Gambar"
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
      </Dialog>
    </Card>
  );
};

export default MainCard;
