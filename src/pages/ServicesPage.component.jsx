import React from "react";
import FileUpload from '../components/FileUpload.component.jsx';
import HelpRequest from '../components/HelpRequest.component.jsx';
import Layout from '../components/Layout.component.jsx';

const ServicesPage = () => {
  return (
    <Layout>
      <FileUpload />
      <HelpRequest />
    </Layout>
  );
};

export default ServicesPage;
