// import { useState } from "react";

const ServerComponent = () => {
  console.log("Server Component");
  // useState(); ServerComponentではuseStateは使えない。
  // また、onClickイベントなどのユーザーイベント系、ブラウザAPIなどはServer Componentでは利用できない
  return <div>ServerComponent</div>;
};

export default ServerComponent;
