import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setBackdrop } from "../../../features/backdrop.slice";
import PopUp from "../../templates/pop-up/pop-up";
import { Backdrop, SignInForm, SignUpForm } from "../../organisms";

const Auth = () => {
  const dispatch = useAppDispatch();
  const t = useAppSelector((state) => state.translation.language);
  const isRegistered = useAppSelector((state) => state.auth.isRegistered);

  useEffect(() => {
    dispatch(setBackdrop(true));
  }, [dispatch]);

  return (
    <Backdrop className="absolute">
      <PopUp className="w-[370px]">
        {isRegistered ? <SignUpForm /> : <SignInForm />}
      </PopUp>
    </Backdrop>
  );
};

export default Auth;
