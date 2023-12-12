import React, { useState, useRef } from "react";
import { TermsOfUse, ImageGallery } from "./components";
import { useGetTestDataQuery } from "./services/test";

const App: React.FC = () => {
  const [isAccepted, setAccepted] = useState<boolean>(false);
  const { data, error, isLoading } = useGetTestDataQuery();

  const onAccept = useRef(() => {
    setAccepted(true);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!isAccepted) {
    return (
      <TermsOfUse 
        termsOfUse={data?.terms_of_use}
        onAccept={onAccept.current}
      />
    );
  }

  return <ImageGallery images={data?.images} />;
};

export default App;
