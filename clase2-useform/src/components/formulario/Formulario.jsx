import React from "react";
import { useForm } from "react-hook-form";

function Formulario() {
  //   const { register } = useForm();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = handleSubmit(() => console.log("Formulario enviado"));

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
      }}
    >
      <style>{`
        /* From Uiverse.io by ammarsaa */ 
        .form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 350px;
          padding: 20px;
          border-radius: 20px;
          position: relative;
          background-color: #1a1a1a;
          color: #fff;
          border: 1px solid #333;
        }
         
        .title {
          font-size: 28px;
          font-weight: 600;
          letter-spacing: -1px;
          position: relative;
          display: flex;
          align-items: center;
          padding-left: 30px;
          color: #00bfff;
        }
         
        .title::before {
          width: 18px;
          height: 18px;
        }
         
        .title::after {
          width: 18px;
          height: 18px;
          animation: pulse 1s linear infinite;
        }
         
        .title::before,
        .title::after {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          border-radius: 50%;
          left: 0px;
          background-color: #00bfff;
        }
         
        .message, 
        .signin {
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.7);
        }
         
        .signin {
          text-align: center;
        }
         
        .signin a:hover {
          text-decoration: underline royalblue;
        }
         
        .signin a {
          color: #00bfff;
        }
         
        .flex {
          display: flex;
          width: 100%;
          gap: 6px;
        }
         
        .form label {
          position: relative;
        }
         
        .form label .input {
          background-color: #333;
          color: #fff;
          width: 100%;
          padding: 20px 5px 5px 10px;
          outline: 0;
          border: 1px solid rgba(105, 105, 105, 0.397);
          border-radius: 10px;
        }
         
        .form label .input + span {
          color: rgba(255, 255, 255, 0.5);
          position: absolute;
          left: 10px;
          top: 0px;
          font-size: 0.9em;
          cursor: text;
          transition: 0.3s ease;
        }
         
        .form label .input:placeholder-shown + span {
          top: 12.5px;
          font-size: 0.9em;
        }
         
        .form label .input:focus + span,
        .form label .input:valid + span {
          color: #00bfff;
          top: 0px;
          font-size: 0.7em;
          font-weight: 600;
        }
         
        .input {
          font-size: medium;
        }
         
        .submit {
          border: none;
          outline: none;
          padding: 10px;
          border-radius: 10px;
          color: #fff;
          font-size: 16px;
          transform: .3s ease;
          background-color: #00bfff;
        }
         
        .submit:hover {
          background-color: #00bfff96;
        }
         
        @keyframes pulse {
          from {
            transform: scale(0.9);
            opacity: 1;
          }
         
          to {
            transform: scale(1.8);
            opacity: 0;
          }
        }
      `}</style>

      <form className="form" onSubmit={onSubmit}>
        <p className="title">Sign Up</p>
        <p className="message">Create your account to get started.</p>

        <div className="flex">
          <label>
            <input
              placeholder=""
              type="text"
              className="input"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "El nombre es requerido",
                },
                minLength: {
                  value: 2,
                  message: "El nombre debe tener al menos 2 caracteres",
                },
              })}
            />
            <span>First Name</span>
            {errors.firstName?.type === "required" && (
              <span>{errors.firstName.message}</span>
            )}
            {errors.firstName?.type === "minLength" && (
              <span>{errors.firstName.message}</span>
            )}
          </label>

          <label>
            <input
              placeholder=""
              type="text"
              className="input"
              {...register("lastName", { required: true })}
            />
            <span>Last Name</span>
            {errors.lastName && <span>El apellido es requerido</span>}
          </label>
        </div>

        <label>
          <input
            placeholder=""
            type="email"
            className="input"
            {...register("email", {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              required: true,
            })}
          />
          <span>Email</span>
          {errors.email && (
            <span>
              {errors.email.type === "required"
                ? "El email es requerido"
                : "El email no es válido"}
            </span>
          )}
        </label>

        <label>
          <input
            placeholder=""
            type="password"
            className="input"
            {...register("password", { required: true })}
          />
          <span>Password</span>
          {errors.password && <span>La contraseña es requerida</span>}
        </label>

        <label>
          <input
            placeholder=""
            type="password"
            className="input"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => {
                if (watch().password !== value) {
                  return "Las contraseñas no coinciden";
                }
              },
            })}
          />
          <span>Confirm password</span>
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </label>

        <input type="submit" value="Submit" className="submit" />

        <p className="signin">
          Already have an account? <a href="#">Sign in</a>
        </p>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </form>
    </div>
  );
}

export default Formulario;
