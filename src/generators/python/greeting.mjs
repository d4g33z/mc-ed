/**
 * Python code generator for the 'greeting' block.
 * @param {Blockly.Block} block Block to generate Python code from.
 * @return {string} Python code or tuple of code and order of operations.
 */


export function defineGreetingPython(Blockly) { // Export a function, take Blockly as arg
    const pythonGeneratorGreeting = function(block) { // Export the generator function

        console.log("python_generators.js: pythonGeneratorGreeting function called for block:", block); // Log when generator is called

        const nameValue = block.getFieldValue('NAME'); // Get value from NAME field
        const messageValue = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC); // Get code from MESSAGE input

        console.log("python_generators.js: Extracted values - Name:", nameValue, ", Message Input Code:", messageValue); // Log extracted values

        let code = '';

        if (messageValue) { // Check if there's a message input connected
            code = `def greet_${nameValue}(message):\n`;
            code += `    print(f"Hello, ${nameValue}! {message}")\n\n`;
            code += `greet_${nameValue}(${messageValue})\n`; // Call the greeting function
        } else {
            code = `def greet_${nameValue}():\n`;
            code += `    print(f"Hello, ${nameValue}!")\n\n`;
            code += `greet_${nameValue}()\n`; // Call the greeting function without message
        }

        console.log("python_generators.js: Generated Python code:\n", code); // Log the generated code

        return code; // Return the generated Python code string
    };


    // console.log("greeting.js: defineGreetingBlock function called, Blockly =", Blockly); // Check Blockly object

    console.log("greeting.js: Inside defineGreetingPython- About to define Blockly.Python.forBlock['greeting']");

    Blockly.Python.forBlock['greeting'] = pythonGeneratorGreeting; // Register the generator with Blockly.Python

    console.log("greeting.js: defineGreetingPython- Blockly.Python.forBlock['greeting'] definition COMPLETED");

} // End of defineGreetingPython function
