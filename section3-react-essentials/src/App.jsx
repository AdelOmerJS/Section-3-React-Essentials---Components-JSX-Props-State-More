import { useState } from "react";

import CoreConcepts from "./Components/coreConcepts/CoreConcepts";
import TabBtn from "./Components/examples/TabBtn";
import Header from "./Components/header/Header";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Examples from "./Components/examples/Examples";

function App() {
  const [title, setTitle] = useState("");

  const renderConcpts = CORE_CONCEPTS.map((ele, idx) => (
    <CoreConcepts {...ele} key={idx} />
  ));

  // const handleClick = (e) => {
  //   setTitle(e);
  // };

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>{renderConcpts}</ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabBtn
              label="components"
              isSelected={title === "components"}
              onClick={() => setTitle("components")}
            />
            <TabBtn
              label="jsx"
              isSelected={title === "jsx"}
              onClick={() => setTitle("jsx")}
            />
            <TabBtn
              label="props"
              isSelected={title === "props"}
              onClick={() => setTitle("props")}
            />
            <TabBtn
              label="state"
              isSelected={title === "state"}
              onClick={() => setTitle("state")}
            />
          </menu>
          <div id="tab-content">
            {EXAMPLES[title] && <Examples ex={EXAMPLES[title]} />}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
