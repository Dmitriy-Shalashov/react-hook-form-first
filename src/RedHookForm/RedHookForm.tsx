import React from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";

import { IShippingFields, IOption } from "./app.interface";

const countries: IOption[] = [
  { value: "Ukraine", label: "Ukraine" },
  { value: "USA", label: "USA" },
  { value: "Canada", label: "Canada" },
  { value: "Poland", label: "Poland" },
];

const city: IOption[] = [
  { value: "Dnipro", label: "Dnipro" },
  { value: "Rivne", label: "Rivne" },
  { value: "Lviv", label: "Lviv" },
  { value: "Cherson", label: "Cherson" },
];

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: "1px dotted black",
    color: state.isSelected ? "#0e101c" : "rgb(130, 136, 150)",
    background: state.isSelected ? "rgb(130, 136, 150)" : null,
    padding: 10,
  }),
};

const getValue = (value: string) =>
  value ? countries.find((countrie) => countrie.value === value) : "";

const RedHookForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    //  watch,
    setValue,
    control,
  } = useForm<IShippingFields>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IShippingFields> = (data) => {
    //  alert(`Your name ${data.addres.country}`);
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div>
      <div>
        <h1>Hook Form by RedGroup</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: "Name is require field!" })}
          type="text"
          placeholder="name"
        />
        <div>
          {errors?.name && (
            <div style={{ color: "green" }}> {errors.name.message} </div>
          )}
        </div>
        <input
          {...register("email", {
            required: "Email is require field!",
            pattern: {
              value: /.+@.+\..+/i,
              message: "Please enter valid email",
            },
          })}
          type="email"
          placeholder="email"
        />
        <div>
          {errors?.email && (
            <div style={{ color: "green" }}> {errors.email.message} </div>
          )}
        </div>
        <label>
          Choise your country:
          <Controller
            control={control}
            name="addres.country"
            rules={{
              required: "Country is required",
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div>
                <ReactSelect
                  placeholder="Countries"
                  styles={customStyles}
                  options={countries}
                  value={getValue(value)}
                  onChange={(newValue) => onChange((newValue as IOption).value)}
                />
                {error && <div style={{ color: "red" }}>{error.message}</div>}
              </div>
            )}
          />
        </label>
        <label>
          Choise your city:
          <Controller
            control={control}
            name="addres.city"
            rules={{
              required: "Sity is required",
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div>
                <ReactSelect
                  placeholder="City"
                  styles={customStyles}
                  options={city}
                  value={getValue(value)}
                  onChange={(newValue) => onChange((newValue as IOption).value)}
                />
                {error && <div style={{ color: "red" }}>{error.message}</div>}
              </div>
            )}
          />
        </label>
        <button>Send</button>
        <button
          onClick={() => {
            setValue("name", "Ivan");
            setValue("email", "ivan@test.com");
          }}
        >
          Fill data
        </button>
      </form>
    </div>
  );
};

export default RedHookForm;
