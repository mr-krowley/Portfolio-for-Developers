import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import s from "./InputName.module.css"
export const InputName = ({ label, register, required }) => {
  return (
    <div className={s.name}>
      <label>{label}</label>
      <input {...register(label, { required })} />

      {/* _name:
      <p>
        <input className="input_name" type="text" />
      </p> */}
    </div>
  );
};
