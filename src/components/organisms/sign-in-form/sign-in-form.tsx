import React, { ChangeEvent, FormEvent, useState } from "react";
import { CloseButton, JoinUsButton } from "../../atoms/ui";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setBackdrop } from "../../../features/backdrop";
import { useNavigate } from "react-router-dom";
import { Input } from "../../atoms/ui";
import { Checkbox } from "../../atoms/ui/checkbox/checkbox";
import { EyeIcon, EyeOffIcon } from "../../../assets/icons";

type formFields = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState<formFields>({
    email: "",
    password: "",
  });
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const t = useAppSelector((state) => state.translation.language);

  function onCloseAuthHandler() {
    dispatch(setBackdrop(false));
    navigate("/");
  }

  function onInputHandler(e: ChangeEvent<HTMLInputElement>) {
    const { value, type } = e.target;
    setFormFields({ ...formFields, [type]: value });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }

  const onPasswordDisplayHandler = () => setVisiblePassword((prev) => !prev);

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <div className="flex items-center justify-between bg-[#EDF2F6] px-[30px] py-5 phone:p-5">
        <h3 className="text-2xl font-bold">{t.user.enter}</h3>
        <CloseButton
          className="h-[16px] w-[16px]"
          onClick={onCloseAuthHandler}
        />
      </div>
      <div className="flex flex-col px-[30px] py-5 phone:p-5">
        <Input
          label={t.user.email_or_tel}
          type="email"
          value={formFields.email}
          required
          onChange={onInputHandler}
        />
        <div className="relative block">
          <Input
            label={t.user.password}
            type={visiblePassword ? "text" : "password"}
            value={formFields.password}
            required
            onChange={onInputHandler}
          />
          <button
            className="absolute top-[46%] right-4"
            onClick={onPasswordDisplayHandler}
          >
            {visiblePassword ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        </div>
        <Checkbox label={t.user.remember_me} />
        <JoinUsButton className="mb-5" />
        <button type="button" className="text-center text-blue-700">
          {t.user.register}
        </button>
      </div>
    </form>
  );
};