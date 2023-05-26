import s from "./CodeBlock.module.css"
import Snippet from "../Snippet/Snippet";
// import codeSnippetArr from "../../"

export const CodeBlock = ({ codeSnippetArr }) => {
  return (
    <div className={s.wrapper}>
      &#47;&#47; Code snippet showcase:
      {codeSnippetArr?.map((elem) => {
        console.log(elem);
        return <Snippet />;
      })}
    </div>
  );
};
