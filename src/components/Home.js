import React from "react";
import Notes from './Notes';

export const Home = (props) => {
  const {showAlert}=props;
  return (
    <div>
      {/* Use Notes Component for fetching notes */}
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default Home;
