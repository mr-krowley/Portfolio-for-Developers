import React from 'react'
import "./HookFormContactMe.css"
import { useForm } from "react-hook-form";
import { InputName } from '../../UI/InputName/InputName';
import { InputEmail } from '../../UI/InputEmail/InputEmail';
import { InputMessage } from '../../UI/InputMessage/InputMessage';




export const HookFormContactMe = () => {
 const { register, handleSubmit } = useForm();
 const onSubmit = (data) => {
   alert(JSON.stringify(data));
 };

  return (
    <div className='Appppp'>
      <div className="inputApp">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="firstName">_name:</label>
            <input
              className="inputName"
              placeholder="_name"
              {...register("firstName")}
            />
          </div>

          <div>
            <label htmlFor="email">_email:</label>
            <input
              className="inputEmail"
              placeholder=""
              type="email"
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="lastName">_message</label>
            <input
              className="inputMessage"
              placeholder=""
              {...register("lastName")}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
      <div className="inputConsole">
        <p>const button = document.querySelector('#sendBtn');</p>
        <p></p>
      </div>
    </div>
  );
}
