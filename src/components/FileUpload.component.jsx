import React, { useContext, useState } from "react";
import { FilePicker, Button, toaster } from "evergreen-ui";
import firebase, { storage, db } from "../firebase.utils.js";
import { AuthContext } from "../contexts/auth.provider.jsx";

const FileUpload = () => {
  const { currentUser } = useContext(AuthContext);
  const [filesUrl, setFilesUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userRef = await db.collection("users").doc(currentUser.displayName);
    filesUrl.map(async (fileUrl) => {
      await userRef.update({
        files: firebase.firestore.FieldValue.arrayUnion(fileUrl),
      });
      toaster.success("File successfully uploaded!");
    });
  };

  const handleFileChange = (files) => {
    let filesUrls = [];
    files.map(async (file) => {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      filesUrls.push(await fileRef.getDownloadURL());
      setFilesUrl(filesUrls);
    });
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
