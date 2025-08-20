import React from "react";
import { useForm } from "react-hook-form";

const FormEjercicio = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          placeholder=""
          {...register("name", {
            required: {
              value: true,
              message: "Este campo es obligatorio",
            },
            minLength: {
              value: 3,
              message: "El campo debe tener al menos 3 caracteres",
            },
          })}
        />
        <span>Name</span>
        {errors.name && (
          <>
            <br />
            <span>{errors.name.message}</span>
          </>
        )}
      </label>

      <label>
        <input
          type="text"
          placeholder=""
          {...register("email", {
            required: {
              value: true,
              message: "Este campo es obligatorio",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "El email no es válido",
            },
          })}
        />
        <span>E-mail</span>
        {errors.email && (
          <>
            <br />
            <span>{errors.email.message}</span>
          </>
        )}
      </label>

      <label>
        <input
          type="text"
          placeholder=""
          {...register("password", {
            required: {
              value: true,
              message: "Este campo es obligatorio",
            },
            minLength: {
              value: 6,
              message: "El campo debe tener al menos 3 caracteres",
            },
          })}
        />
        <span>Password</span>
        {errors.password && (
          <>
            <br />
            <span>{errors.password.message}</span>
          </>
        )}
      </label>

      <input type="submit" value="Submit" className="submit" />
    </form>
  );
};

export default FormEjercicio;
