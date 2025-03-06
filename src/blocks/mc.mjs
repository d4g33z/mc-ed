console.log("mc.mjs: Start of file execution");

import {MCED} from "../lib/utils.mjs"; //Importing here!

export function defineMineCraftBlocks(Blockly) {
    console.log("mc.mjs: Inside defineMineCraftBlocks")

    Blockly.Blocks['dummy_block'] = {
        init: function () {
            console.log("mc.mjs: Inside init() function of ...");
        }

    };

    // --- Position Category ---

    Blockly.Blocks['minecraft_vector_3d'] = {
        init: function () {
            if (this.isInFlyout) {
                this.appendDummyInput()
                    .appendField(Blockly.Msg.MINECRAFT_VECTOR);
                this.setOutput(true, "3DVector");
                this.setColour(160);
            } else {
                this.appendDummyInput()
                    .appendField("x:")
                    .appendField(new Blockly.FieldTextInput("0"), "X")
                    .appendField("y:")
                    .appendField(new Blockly.FieldTextInput("0"), "Y")
                    .appendField("z:")
                    .appendField(new Blockly.FieldTextInput("0"), "Z");
                this.setOutput(true, "3DVector");
                this.setColour(160);
            }
        }
    };

    Blockly.Blocks['minecraft_vector_delta'] = {
        init: function () {
            if (this.isInFlyout) {
                this.appendDummyInput()
                    .appendField(Blockly.Msg.MINECRAFT_VECTOR_DELTA);
                this.setOutput(true, "3DVector");
                this.setColour(160);
            } else {
                this.appendDummyInput()
                    .appendField("x:")
                    .appendField(new Blockly.FieldNumber(1), "X") // Use FieldNumber
                    .appendField("y:")
                    .appendField(new Blockly.FieldNumber(0), "Y")
                    .appendField("z:")
                    .appendField(new Blockly.FieldNumber(0), "Z");
                this.setOutput(true, "3DVector");
                this.setColour(160);
            }
        }
    };

    Blockly.Blocks['minecraft_position_player'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("player position");
            this.setOutput(true, "3DVector");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_position_entity'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("position of")
                .appendField(new Blockly.FieldDropdown([ // Simplified from original
                    ["entity", "ENTITY"] // Placeholder options
                ]), "ENTITY");
            this.setOutput(true, "3DVector");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_position_get_direction'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("direction");
            this.setOutput(true, "3DVector");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_position_here'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("here");
            this.setOutput(true, '3DVector');
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_position_look_at'] = {
        init: function () {
            this.appendValueInput("TARGET")
                .setCheck("3DVector")
                .appendField("look at");
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(160);
            //Shadow configuration
            MCED.BlocklyUtils.configureShadow(this, "TARGET");
        }
    };

    // --- Craft Category ---
    Blockly.Blocks['minecraft_create_column'] = {
        init: function () {
            this.setInputsInline(true);
            this.setNextStatement(true);
            this.setPreviousStatement(true);
            this.setColour("#81c23c");

            if (this.isInFlyout) {
                this.appendDummyInput()
                    .appendField(Blockly.Msg.MINECRAFT_COLUMN);
            } else {
                this.appendValueInput("POSITION")
                    .setCheck("3DVector")
                    .appendField(Blockly.Msg.MINECRAFT_COLUMN)
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput("WIDTH")
                    .setCheck("Number")
                    .appendField(Blockly.Msg.MINECRAFT_COLUMN_WIDTH)
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput("HEIGHT")
                    .setCheck("Number")
                    .appendField(Blockly.Msg.MINECRAFT_COLUMN_HEIGHT)
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput("TYPE")
                    .setCheck("Block")
                    .appendField(Blockly.Msg.MINECRAFT_COLUMN_TYPE)
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldAxis("y", ["y", "x", "z"]), "AXIS")
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendDummyInput()
                    .appendField(Blockly.Msg.MINECRAFT_COLUMN_FILLED)
                    .appendField(new Blockly.FieldCheckbox("FALSE"), "FILLED")
                    .setAlign(Blockly.ALIGN_RIGHT);

                MCED.BlocklyUtils.configureShadow(this, "POSITION");
                MCED.BlocklyUtils.configureShadow(this, "WIDTH");
                MCED.BlocklyUtils.configureShadow(this, "HEIGHT");
                MCED.BlocklyUtils.configureShadow(this, "TYPE");
            }
        }
    };

    Blockly.Blocks['minecraft_create_plane'] = {
        init: function () {
            this.setInputsInline(true);
            this.setNextStatement(true);
            this.setPreviousStatement(true);
            this.setColour("#81c23c");

            if (this.isInFlyout) {
                this.appendDummyInput()
                    .appendField(Blockly.Msg.MINECRAFT_PLANE);
            } else {
                this.appendValueInput("POSITION")
                    .setCheck("3DVector")
                    .appendField(Blockly.Msg.MINECRAFT_PLANE)
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput("WIDTH")
                    .setCheck("Number")
                    .appendField(Blockly.Msg.MINECRAFT_COLUMN_WIDTH)  //Correct Use
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput("HEIGHT")
                    .setCheck("Number")
                    .appendField(Blockly.Msg.MINECRAFT_COLUMN_HEIGHT) //Correct Use
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput("TYPE")
                    .setCheck("Block")
                    .appendField(Blockly.Msg.MINECRAFT_COLUMN_TYPE) //Correct Use
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldAxis("y", ["y", "x", "z"]), "AXIS")
                    .setAlign(Blockly.ALIGN_RIGHT);

                MCED.BlocklyUtils.configureShadow(this, "POSITION");
                MCED.BlocklyUtils.configureShadow(this, "WIDTH");
                MCED.BlocklyUtils.configureShadow(this, "HEIGHT");
                MCED.BlocklyUtils.configureShadow(this, "TYPE");
            }
        }
    };
    Blockly.Blocks['minecraft_create_shape'] = {
        init: function () {
            const shapeOptions = [[Blockly.Msg.MINECRAFT_SHAPE_CUBE, "CUBE"], [Blockly.Msg.MINECRAFT_SHAPE_SPHERE, "SPHERE"], [Blockly.Msg.MINECRAFT_SHAPE_PYRAMID, "PYRAMID"]];

            this.appendDummyInput()
                .appendField(Blockly.Msg.MINECRAFT_CREATE_SHAPE);

            this.appendDummyInput("SHAPE_INPUT") // Use a consistent name
                .appendField(new Blockly.FieldDropdown(shapeOptions, this._onShapeChange.bind(this)), "SHAPE");


            this.setInputsInline(false);
            this.setNextStatement(true);
            this.setPreviousStatement(true);
            this.setColour("#81c23c");
            this._updateShape("CUBE"); // Initialize
        },

        mutationToDom: function () {
            const container = document.createElement('mutation');
            const shape = this.getFieldValue('SHAPE'); // Get the FIELD value.
            container.setAttribute('shape', shape);
            return container;
        },

        domToMutation: function (xmlElement) {
            const shape = xmlElement.getAttribute('shape') || 'CUBE';
            this._updateShape(shape); //Initializes the shape based on the saved state.
            this.setFieldValue(shape, 'SHAPE'); // VERY important: Update the field value.
        }, _onShapeChange: function (newShape) {
            if (newShape !== this._previousShape) { // Prevent infinite loops
                this._updateShape(newShape);
            }
            return newShape;
        }, _updateShape: function (shape) {
            // 1. Disconnect and store existing connections.
            const connections = {};
            const inputNames = ['SIZE', 'RADIUS', 'BASE', 'TYPE', 'POSITION', "FILLED"]; // Include *all* possible inputs.
            for (const inputName of inputNames) {
                const input = this.getInput(inputName);
                if (input && input.connection && input.connection.targetConnection) {
                    connections[inputName] = input.connection.targetConnection;
                    input.connection.disconnect(); // Clean disconnect.
                }
            }

            // 2. Remove old inputs.
            this._cleanPreviousShape();


            // 3. Add shape-specific inputs, position and type/filled inputs.
            this._addPositionInput();
            switch (shape) {
                case 'CUBE':
                    this._addCubeInputs();
                    break;
                case 'SPHERE':
                    this._addSphereInputs();
                    break;
                case 'PYRAMID':
                    this._addPyramidInputs();
                    break;
            }
            this._addTypeAndFilledInputs();

            // 4. Reconnect blocks.
            for (const inputName of inputNames) {
                if (connections[inputName] && this.getInput(inputName)) {
                    this.getInput(inputName).connection.connect(connections[inputName]);
                }
            }
            this._previousShape = shape;

        },

        _addCubeInputs: function () {
            this.appendValueInput("SIZE")
                .setCheck("Number")
                .appendField(Blockly.Msg.MINECRAFT_PRIMITIVE_SIZE)
                .setAlign(Blockly.ALIGN_RIGHT);
            MCED.BlocklyUtils.configureShadow(this, "SIZE");

        },

        _addSphereInputs: function () {
            this.appendValueInput("RADIUS")
                .setCheck("Number")
                .appendField(Blockly.Msg.MINECRAFT_PRIMITIVE_RADIUS)
                .setAlign(Blockly.ALIGN_RIGHT);
            MCED.BlocklyUtils.configureShadow(this, "RADIUS");
        },

        _addPyramidInputs: function () {
            this.appendValueInput("BASE")
                .setCheck("Number")
                .appendField(Blockly.Msg.MINECRAFT_PRIMITIVE_BASE)
                .setAlign(Blockly.ALIGN_RIGHT);
            MCED.BlocklyUtils.configureShadow(this, "BASE");
        },

        _addTypeAndFilledInputs: function () {
            this.appendValueInput("TYPE")
                .setCheck("Block")
                .appendField(Blockly.Msg.MINECRAFT_PRIMITIVE_TYPE)
                .setAlign(Blockly.ALIGN_RIGHT);
            MCED.BlocklyUtils.configureShadow(this, "TYPE");
            this.appendDummyInput("FILLED")
                .appendField(Blockly.Msg.MINECRAFT_COLUMN_FILLED)
                .appendField(new Blockly.FieldCheckbox("FALSE"), "FILLED")
                .setAlign(Blockly.ALIGN_RIGHT);
        },

        _addPositionInput: function () {
            this.appendValueInput("POSITION")
                .setCheck("3DVector")
                .appendField(Blockly.Msg.MINECRAFT_CREATE_SHAPE_POSITION)
                .setAlign(Blockly.ALIGN_RIGHT);
            MCED.BlocklyUtils.configureShadow(this, "POSITION");
        }, _cleanPreviousShape: function () {

            const inputs = ['SIZE', 'RADIUS', 'BASE', 'TYPE', 'FILLED', "POSITION"]; // Include *all* possible inputs.
            for (const inputName of inputs) {
                if (this.getInput(inputName)) {
                    this.removeInput(inputName);
                }
            }
        },
    };

    // --- Blocks Category ---
    Blockly.Blocks['minecraft_block'] = {
        // Define properties and methods specific to 'minecraft_block'.
        // For example:
        init: function () {
            // Initialize the block's fields, inputs, outputs, etc.
            this.appendDummyInput()
                .appendField("Minecraft Block");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setOutput(true, "Block");
            this.setColour(230);
        }, // Additional properties or methods can be added here.
    };

    Blockly.Blocks['minecraft_block_world'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["dirt", "DIRT"], ["grass", "GRASS"], ["sand", "SAND"], ["gravel", "GRAVEL"], ["stone", "STONE"], ["cobblestone", "COBBLESTONE"], ["sandstone", "SANDSTONE"], ["bedrock", "BEDROCK"], ["planks", "WOOD_PLANKS"]]), "TYPE");
            this.setOutput(true, "Block");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_block_material'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["wood", "WOOD"], ["log", "LOG"], ["leaves", "LEAVES"], ["sponge", "SPONGE"], ["tnt", "TNT"], ["bookshelf", "BOOKSHELF"], ["mossy cobblestone", "MOSSY_COBBLESTONE"], ["obsidian", "OBSIDIAN"]]), "TYPE");
            this.setOutput(true, "Block");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_block_block'] = { //Naming conflict with previous mock
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["gold", "GOLD"], ["iron", "IRON"], ["coal", "COAL"], ["diamond", "DIAMOND"], ["emerald", "EMERALD"], ["lapis lazuli", "LAPIS_LAZULI"]]), "TYPE");
            this.setOutput(true, "Block");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_block_lamp'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["glowstone", "GLOWSTONE"], ["sea lantern", "SEA_LANTERN"], ["redstone lamp", "REDSTONE_LAMP"]]), "TYPE");
            this.setOutput(true, "Block");
            this.setColour(20);
        }
    };

    Blockly.Blocks['minecraft_block_glass'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("glass")
                .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
            this.setOutput(true, "Block");
            this.setColour(20);
        }
    };

    Blockly.Blocks['minecraft_block_wool'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("wool")
                .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
            this.setOutput(true, "Block");
            this.setColour(20);
        }
    };

    Blockly.Blocks['minecraft_block_clay'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("clay")
                .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
            this.setOutput(true, "Block");
            this.setColour(20);
        }
    };

    Blockly.Blocks['minecraft_block_stairs'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["cobblestone stairs", "COBBLESTONE_STAIRS"], ["brick stairs", "BRICK_STAIRS"], ["stone brick stairs", "STONE_BRICK_STAIRS"], ["nether brick stairs", "NETHER_BRICK_STAIRS"], ["sandstone stairs", "SANDSTONE_STAIRS"], ["quartz stairs", "QUARTZ_STAIRS"], ["wood stairs", "WOOD_STAIRS"]]), "TYPE");
            this.setOutput(true, "Block");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_block_slab'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["cobblestone slab", "COBBLESTONE_SLAB"], ["brick slab", "BRICK_SLAB"], ["stone brick slab", "STONE_BRICK_SLAB"], ["nether brick slab", "NETHER_BRICK_SLAB"], ["sandstone slab", "SANDSTONE_SLAB"], ["quartz slab", "QUARTZ_SLAB"], ["wood slab", "WOOD_SLAB"]]), "TYPE");
            this.setOutput(true, "Block");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_block_fence'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["fence", "FENCE"], ["nether brick fence", "NETHER_BRICK_FENCE"], ["fence gate", "FENCE_GATE"]]), "TYPE");
            this.setOutput(true, "Block");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_block_door'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("door"); // Simplified, original uses images
            this.setOutput(true, "Block");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_block_trapdoor'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("trapdoor");  // Simplified
            this.setOutput(true, "Block");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_block_liquid'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["water", "WATER"], ["lava", "LAVA"]]), "TYPE");
            this.setOutput(true, "Block");
            this.setColour(210);
        }
    };

    Blockly.Blocks['minecraft_block_falling'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["sand", "SAND"], ["gravel", "GRAVEL"]]), "TYPE");
            this.setOutput(true, "Block");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_block_redstone'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["redstone", "REDSTONE"], ["redstone torch", "REDSTONE_TORCH"]]), "TYPE");
            this.setOutput(true, "Block");
            this.setColour(0);
        }
    };

    Blockly.Blocks['minecraft_block_button'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("button");  // Simplified, should ideally be an image
            this.setOutput(true, "Block");
            this.setColour(0);
        }
    };

    Blockly.Blocks['minecraft_block_lever'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("lever");  // Simplified
            this.setOutput(true, "Block");
            this.setColour(0);
        }
    };

    Blockly.Blocks['minecraft_block_pressure_plate'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["pressure plate", "PRESSURE_PLATE"]]), "TYPE");
            this.setOutput(true, "Block");
            this.setColour(0);
        }
    };

    Blockly.Blocks['minecraft_block_rail'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["rail", "RAIL"], ["powered rail", "POWERED_RAIL"], ["detector rail", "DETECTOR_RAIL"], ["activator rail", "ACTIVATOR_RAIL"]]), "TYPE");
            this.setOutput(true, "Block");
            this.setColour(0);
        }
    };
}