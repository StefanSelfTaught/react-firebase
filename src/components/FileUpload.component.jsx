import React, { useContext, useState } from "react";
import { FilePicker, Button, toaster } from "evergreen-ui";
import { storage, db } from "../firebase.utils.js";
import * as firebase from "firebase/app";
import "firebase/auth";
import { AuthContext } from "../contexts/auth.provider.jsx";

const FileUpload = () => {
  const { currentUser } = useContext(AuthContext);
  const [fileUrl, setFileUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userRef = await db.collection("users").doc(currentUser.displayName);
    await userRef.update({
      files: firebase.firestore.FieldValue.arrayUnion(fileUrl.toString()),
    });
    toaster.success("File successfully uploaded!");
  };

  const handleFileChange = async (file) => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file[0].name);
    await fileRef.put(file[0]);
    const fileUrl = await fileRef.getDownloadURL();
    setFileUrl(fileUrl);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FilePicker
          multiple
          width={250}
          marginBottom={16}
          onChange={handleFileChange}
          placeholder="Select the file here!"
        />
        <Button appearance="primary" type="submit">
          Urcare document
        </Button>
      </form>
    </div>
  );
};

export default FileUpload;
