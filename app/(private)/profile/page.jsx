import React from "react";
import CardContainer from "./components/CardContainer";

export const metadata = {
  title: "Profile",
};
const Profile = () => {
  return (
      <div className="flex items-center justify-center mt-10">
          <div className="flex flex-col">
              <h1 className="text-3xl mt-20 text-white text-center">
                  Who&#39;s watching?
              </h1>
              <CardContainer />
          </div>
      </div>
  );
};

export default Profile;
