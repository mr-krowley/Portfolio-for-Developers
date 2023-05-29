import React from "react";
import "./HookFormContactMe.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const handleClick = (inputName) => {
  inputName.preventDefault();
  alert("Hello");
};



export const HookFormContactMe = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const [inputName, setInputName] = useState("");
  const [inputMail, setInputMail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  return (
    <>
    <div className="Appppp">
      <div className="inputApp">
        <form
          onSubmit={handleSubmit(onSubmit)}
          onClick={(evt) => evt.preventDefault()}
        >
          <div>
            <label className="labelName" htmlFor="firstName">
              _name:
            </label>
            <input
              className="inputName"
              placeholder="_name"
              {...register("firstName")}
              value={inputName}
              id="in_name"
              onChange={(evt) => setInputName(evt.target.value)}
            />
          </div>

          <div>
            <label className="labelEmail" htmlFor="email">
              _email:
            </label>
            <input
              className="inputEmail"
              placeholder=""
              type="email"
              {...register("email")}
              value={inputMail}
              id="in_mail"
              onChange={(evt) => setInputMail(evt.target.value)}
            />
          </div>
          <div>
            <label className="labelMessage" htmlFor="lastName">
              _message
            </label>
            <textarea
              className="inputMessage"
              placeholder=""
              {...register("lastName")}
              type="textarea"
              value={inputMessage}
              id="in_message"
              onChange={(evt) => setInputMessage(evt.target.value)}
            />
          </div>
          <button onClick={handleClick} type="submit">
            submit-message
          </button>
          

          {/* <input type="submit" /> */}
        </form>
      </div>
      <div className="inputConsole">
        <p className="pi">
          <span className="pizda">const </span>
          <span className="zda">button</span>
          <span className="pizda"> = </span>
          <span className="zda">document</span>
          <span className="da">.</span>
          <span className="zda">querySelector</span>
          <span className="da">(</span>'#sendBtn'
          <span className="da">);</span>
        </p>
        <br></br>
        <p className="pi">
          <span className="pizda">const </span>
          <span className="zda">message</span>
          <span className="pizda"> = </span>
          <span className="da">&#123;</span>
        </p>
        <p className="pi">
          <span className="zda">&nbsp;&nbsp;name</span>
          <span className="da">:</span> {inputName}
          <span className="da">,</span>
        </p>
        <p className="pi">
          <span className="zda">&nbsp;&nbsp;email</span>
          <span className="da">:</span> {inputMail}
          <span className="da">,</span>
        </p>
        <p className="pi">
          <span className="zda">&nbsp;&nbsp;message</span>
          <span className="da">:</span> {inputMessage}
          <span className="da">,</span>
        </p>
        <br></br>
        <p className="pi">
          <span className="da">&nbsp;&nbsp;date:</span>{" "}
          {new Date().toDateString()}
        </p>
        <p className="da">&#125;</p>
        <br></br>
        <p className="pi">
          <span className="zda">button</span>
          <span className="da">.</span>
          <span className="zda">addEventListener</span>
          <span className="da">(</span> 'click'
          <span className="da">, () </span>
          <span className="pizda">&#8658; </span>
          <span className="da">&#123;</span>
        </p>
        <p className="pi">
          <span className="zda">&nbsp;&nbsp;form</span>
          <span className="da">.</span>
          <span className="zda">send</span>
          <span className="da">(</span>
          <span className="zda">message</span>
          <span className="da">);</span>
        </p>
        <p className="da">&#125;)</p>
      </div>
    </div>
    </>
  );
};
