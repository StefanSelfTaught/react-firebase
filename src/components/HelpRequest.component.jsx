import React, { useState } from "react";
import { Button, Dialog, TextInput } from "evergreen-ui";

const HelpRequest = () => {
  const [isDialogShown, setIsDialogShown] = useState(false);
  const [helpMessage, setHelpMessage] = useState(null);

  return (
    <>
      <Button
        onClick={() => setIsDialogShown(true)}
        appearance="primary"
        marginLeft={24}
      >
        Cerere Ajutor
      </Button>
      <Dialog
        isShown={isDialogShown}
        title="Cerere Ajutor"
        onCloseComplete={() => setIsDialogShown(false)}
        onConfirm={() => {
          console.log(helpMessage);
          setIsDialogShown(false);
        }}
        confirmLabel="Send message"
      >
        <TextInput
          onChange={(e) => setHelpMessage(e.target.value)}
          name="message"
          placeholder="Message"
        />
      </Dialog>
    </>
  );
};

export default HelpRequest;
