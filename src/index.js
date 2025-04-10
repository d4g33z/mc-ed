import * as Blockly from 'blockly'; // import all of blockly
import { pythonGenerator } from 'blockly/python';

// test code
import { defineGreetingBlock } from './blocks/greeting.mjs'; // Import defineGreetingPython
import { installGreetingGenerator } from './generators/python/greeting.mjs'; // Import defineGreetingPython

import {defineMineCraftBlocklyUtils} from "./lib/utils.mjs";
import {defineMineCraftConstants} from "./lib/constants.mjs";
import {defineMineCraftBlocks} from "./blocks/mc.mjs";

// we should have everything we need in predefined blocks
// import {defineMathBlocks} from "./blocks/math.mjs";
// import {installMathGenerators} from "./generators/python/math.mjs";


async function init() {

    // defineMathBlocks(Blockly);

    defineMineCraftBlocklyUtils(Blockly);
    defineMineCraftConstants(Blockly);
    defineMineCraftBlocks(Blockly)

    defineGreetingBlock(Blockly)
    installGreetingGenerator(pythonGenerator);

    var workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
        grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true
        },
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
        }
    });

    window.saveWorkspaceToJson = function () {
        // 1. Serialize workspace to JSON object
        const workspaceJson = Blockly.serialization.workspaces.save(workspace);

        // 2. Convert JSON object to a JSON string
        const jsonText = JSON.stringify(workspaceJson, null, 2); // Use null, 2 for pretty printing

        // 3. Create a download link for the JSON file
        const filename = 'workspace.json'; // Updated filename extension

        const element = document.createElement('a');
        element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(jsonText)); // Updated MIME type
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    window.generatePythonCode = function () {

        var pythonCode = pythonGenerator.workspaceToCode(workspace);
        document.getElementById('pythonCodeDisplay').value = pythonCode; // Set textarea value
    }

    async function executeIPythonCommand(command, commandArguments) {
        const apiEndpoint = 'http://localhost:5000/ipython_magic'; // API server URL
        const requestData = {command: command, arguments: commandArguments};

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data.error) {
                console.error("IPython Magic Error:", data.error);
                alert(`IPython Command Error: ${data.error}`); // Or better error handling in UI
                return null;
            } else {
                console.log("IPython Magic Output:", data.output);
                return data.output; // Process and display the output in your editor
            }

        } catch (error) {
            console.error("Fetch error calling IPython API:", error);
            alert("Error communicating with IPython process."); // User-friendly error
            return null;
        }
    }

// Example of calling this function when a button is clicked or a Blockly event occurs:
    window.callPythonFromBlockly = async function () { // Example - make it global for button onClick
        console.log("Inside callPythonFromBlockly")
        const commandToExecute = '%ls'; // Example magic command - list files
        const commandArgs = '-l . ';   // Example arguments
        const output = await executeIPythonCommand(commandToExecute, commandArgs);
        // if (output) {
        //     document.getElementById('pythonCodeDisplay').value = "IPython Output:\n" + output; // Display output
        // }
    };

    window.createPythonScript = async function () { // Example - make it global for button onClick
        console.log("Inside executePythonCode")
        generatePythonCode() // generate what is visible in text area
        const commandToExecute = '%mc_create_script'; // Example magic command - list files
        const commandArgs = document.getElementById('pythonCodeDisplay').value;   // Example arguments
        const output = await executeIPythonCommand(commandToExecute, commandArgs);
        // if (output) {
        //     document.getElementById('pythonCodeDisplay').value = "IPython Output:\n" + output; // Display output
        // }
    };
}

init();