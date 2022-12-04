import React, { ChangeEvent, FormEvent, useState } from "react";
import { CloseButton, Input, JoinUsButton } from "../../atoms/ui";
import { EyeIcon, EyeOffIcon } from "../../../assets/icons";
import { Checkbox } from "../../atoms/ui/checkbox/checkbox";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { setBackdrop } from "../../../features/backdrop";
import PhoneInput, {
  isValidPhoneNumber,
  Value,
} from "react-phone-number-input/input";

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

  function onCloseAuthHandler() {
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

  console.log(validTel);

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

        <div className="mb-5 block">
          <label htmlFor="tel" className="">
            {t.user.number_of_tel}
          </label>
          <PhoneInput
            id="tel"
            className="mt-2 w-full rounded border-2 border-solid border-gray-300 py-2.5 pl-4 pr-2.5 focus:border-blue-500 focus:ring-blue-500"
            value={formFields.tel}
            country="MD"
            placeholder={"373 690 55 121"}
            onChange={(value) => onTelInputHandler(value)}
          />
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
        <button type="button" className="text-center text-blue-700">
          {t.user.login}
        </button>
      </div>
    </form>
  );
};
