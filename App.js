import React from "react";
import ReactDOM from "react-dom/client";

// Title Component
const TitleComponent = () => ( 
<h1 className="head" tabIndex="5">
    Namaste React 🙏 Using JSX 
    </h1>
    );

// React Functional Component
const HeadingComponent = () => (
    <div id="container">
        {TitleComponent()}
        <TitleComponent />
        <TitleComponent></TitleComponent>
        <h1 className="heading" >Namaste React 🙏 Using Functional Component </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
