import { useLocation, useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import { Title, UserPageWrapper } from "./styles";
import { useLayoutEffect } from "react";

function User() {
  const navigate = useNavigate();

  const locationInfo = useLocation();
  console.log(
    locationInfo
  )

  const goHome = () => {
    navigate("/");
  };

  return (
    <UserPageWrapper>
      <Title>User Page</Title>
      <Button name="Go to Home page" onClick={goHome} />
    </UserPageWrapper>
  );
}

export default User;
