import "./App.css";
import coreConceptImage from "./assets/react-core-concepts.png";
import components from "./assets/components.png";
import jsx from "./assets/jsx-ui.png";
import state from "./assets/state-mgmt.png";
import props from "./assets/config.png";
import CoreConcept from "./component/CoreConcept";
import TabButton from "./component/TabButton";
import { EXAMPLES } from "./data";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleClick(topic) {
    setSelectedTopic(topic);
  }

  return (
    <div>
      <header>
        <img src={coreConceptImage} alt="core concept" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>

      <main id="tab-content">
        <h2>Core Concepts</h2>
        <div>
          <CoreConcept
            title="Component"
            description="Components are the basic building blocks of a React application's user interface (UI). They are independent, reusable pieces of code that encapsulate a specific part of the UI and its behavior."
            image={components}
          />
          <CoreConcept
            title="JSX"
            description="State in React refers to a JavaScript object that stores data specific to a component. This data can change over time, typically due to user interactions, API responses, or other events."
            image={jsx}
          />
          <CoreConcept
            title="Props"
            description="In React, props (short for properties) are a mechanism for passing data from a parent component to its child components. They are essentially inputs to a component that allow it to receive and display dynamic information.
"
            image={props}
          />
          <CoreConcept
            title="State"
            description="State in React refers to a JavaScript object that stores data specific to a component. This data can change over time, typically due to user interactions, API responses, or other events."
            image={state}
          />
        </div>
      </main>

      <section>
        <h2>Examples</h2>
        <menu id="tab-content">
          <TabButton
            isSelected={selectedTopic === "components"}
            onSubmit={() => handleClick("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onSubmit={() => handleClick("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onSubmit={() => handleClick("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onSubmit={() => handleClick("state")}
          >
            State
          </TabButton>
        </menu>

        {!selectedTopic ? (
          <p>Please select a Topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
