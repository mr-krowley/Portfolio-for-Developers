import React from "react";
import { Reacts } from "../../UI/react/Reacts";
import { Html } from "../../UI/html/Html";
import { Css } from "../../UI/css/Css";
import { Vue } from "../../UI/vue/Vue";
import { Angular } from "../../UI/angular/Angular";
import { Gatsby } from "../../UI/gatsby/Gatsby";
import { Flutter } from "../../UI/flutter/Flutter";

 
export const ProjectsSelect = () => {
  return (
    <form id="select_project">
      <select>
        <option value="React"><Reacts/></option>
        <option value="HTML"><Html/></option>
        <option value="CSS"><Css/></option>
        <option value="Vue"><Vue/></option>
        <option value="Angular"><Angular/></option>
        <option value="Gatsby"><Gatsby/></option>
        <option value="Flutter"><Flutter/></option>
      </select>
    </form>
  );
};
