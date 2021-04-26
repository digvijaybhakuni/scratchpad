import './app.jsx';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from 'react-codemirror';


const ScratchPad = () => {
    const options = {
        theme: "material"
    };
    
    const updateScratchpad = newValue => {
        console.log(newValue)
    }
    
    return <CodeMirror
    value="Hello from CodeMirror in React in Electron"
    onChange={updateScratchpad}
    options={options} />;
}


ReactDOM.render(<ScratchPad />, document.body);
