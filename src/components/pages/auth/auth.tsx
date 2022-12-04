import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setBackdrop } from "../../../features/backdrop";
import PopUp from "../../templates/pop-up/pop-up";
import { Backdrop, SignInForm, SignUpForm } from "../../organisms";

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const t = useAppSelector((state) => state.translation.language);

  useEffect(() => {
    dispatch(setBackdrop(true));
  }, [dispatch]);

  return (
    <Backdrop className="absolute">
      <PopUp className="w-[370px]">
        {isRegistered ? <SignInForm /> : <SignUpForm />}
      </PopUp>
    </Backdrop>
  );
};

export default Auth;
