import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { CloseButton, Input, JoinUsButton } from "../../atoms/ui";
import {
  EyeIcon,
  EyeOffIcon,
  SuccessIcon,
  WarningIcon,
} from "../../../assets/icons";
import { Checkbox } from "../../atoms/ui/checkbox/checkbox";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { setBackdrop } from "../../../features/backdrop.slice";
import PhoneInput, {
  isValidPhoneNumber,
  Value,
} from "react-phone-number-input/input";
import {
  CODE_MD,
  DEFAULT_INPUT_CLASS,
  ERROR_INPUT_CLASS,
  SUCCESS_INPUT_CLASS,
} from "../../../constants";
import { setIsRegistered } from "../../../features/auth.slice";

type formFields = {
  email: string;
  password: string;
  tel: string;
};

type validTelNumber = {
  success: boolean;
  error: boolean;
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState<formFields>({
    email: "",
    password: "",
    tel: "",
  });

  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [validTel, setValidTel] = useState<validTelNumber>({
    success: false,
    error: false,
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const t = useAppSelector((state) => state.translation.language);

  function onCloseAuthHandler(e: MouseEvent) {
    e.preventDefault();
    dispatch(setBackdrop(false));
    navigate("/");
  }

  function onInputHandler(e: ChangeEvent<HTMLInputElement>) {
    const { value, type } = e.target;
    setFormFields({ ...formFields, [type]: value });
  }

  function onTelInputHandler(value: Value | undefined) {
    if (!value) {
      return;
    }

    if (isValidPhoneNumber(value)) {
      setValidTel({ success: true, error: false });
    } else {
      setValidTel({ success: false, error: true });
    }

    setFormFields({ ...formFields, tel: value });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }

  const onPasswordDisplayHandler = () => setVisiblePassword((prev) => !prev);

  const successInput = validTel.success
    ? SUCCESS_INPUT_CLASS
    : DEFAULT_INPUT_CLASS;

  const errorInput = validTel.error ? ERROR_INPUT_CLASS : DEFAULT_INPUT_CLASS;

  const setSignInUserHandler = () => dispatch(setIsRegistered(false));

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <div className="flex items-center justify-between bg-[#EDF2F6] px-[30px] py-5 phone:p-5">
        <h3 className="text-2xl font-bold">{t.user.registration}</h3>
        <CloseButton
          className="h-[16px] w-[16px]"
          onClick={onCloseAuthHandler}
        />
      </div>
      <div className="flex flex-col px-[30px] py-5 phone:p-5">
        <Input
          label={t.user.name}
          type="text"
          value={formFields.email}
          required
          onChange={onInputHandler}
        />
        <Input
          label={t.user.email}
          type="email"
          value={formFields.email}
          required
          onChange={onInputHandler}
        />

        <div className="relative mb-5 block">
          <label
            htmlFor="tel"
            className={`${validTel.success && "text-green-700"} ${
              validTel.error && "text-red-700"
            } mb-2`}
          >
            {t.user.number_of_tel}
          </label>
          <span className="absolute left-2 top-[55%]">{CODE_MD}</span>
          <PhoneInput
            id="tel"
            className={` ${validTel.success && successInput} ${
              validTel.error && errorInput
            }
              mt-2 w-full rounded border-2 border-solid border-gray-300 py-2.5 pr-2.5 pl-12
            `}
            value={formFields.tel}
            country="MD"
            defaultCountry="MD"
            placeholder=" 690 55 121"
            onChange={(value) => onTelInputHandler(value)}
          />
          {validTel.success && (
            <SuccessIcon className="absolute right-2 top-[55%]" />
          )}
          {validTel.error && (
            <WarningIcon className="absolute right-2 top-[55%]" />
          )}
        </div>

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
        <JoinUsButton className="mb-5" register />
        <button
          type="button"
          className="text-center text-blue-800 transition-colors hover:text-gray-500"
          onClick={setSignInUserHandler}
        >
          {t.user.login}
        </button>
      </div>
    </form>
  );
};
