export function defineMineCraftShadowBlocks(Blockly,MCED) {

    // Blockly.Xml.textToDom = function (e) {
    //     return (e = (new DOMParser).parseFromString(e, "text/xml")) && e.firstChild && "xml" == e.firstChild.nodeName.toLowerCase() && e.firstChild === e.lastChild
    // }

    // Define FieldAxis as a class that extends FieldDropdown, respecting its argument values
    // by transforming ['x','y','z'] to [['x','x'],...] i.e. [[text,value]...]

    Blockly.FieldAxis = class extends Blockly.FieldDropdown {
        constructor(value, options) {
            const dropdownOptions = options.map(opt => [opt, opt]);
            super(dropdownOptions); // Call the parent (FieldDropdown) constructor using 'super'.
            this.setValue(value);
        }
    };

    MCED.Defaults = {
        values: {}
    }

    MCED.BlocklyUtils = {
        configureShadow: function (block, inputName) {
            // Placeholder.  In a real implementation, you'd interact with the Blockly API
            // to set shadow blocks.  This is a CRITICAL part for getting the default
            // values and toolbox behavior correct.
            // console.log(`configureShadow called for <span class="math-inline">\{block\.type\}\.</span>{inputName}`);
            let shadowValue;
            if (Blockly.Defaults.values[block.type] && Blockly.Defaults.values[block.type][inputName]) {
                shadowValue = Blockly.Defaults.values[block.type][inputName].shadow;
            }

            if (shadowValue) {
                block.getInput(inputName).connection.setShadowDom(Blockly.Xml.textToDom(shadowValue));
            }


        }, get3dPickerShadow: function () {
            // Placeholder - returns a simple 3D vector shadow block XML string.
            return '<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>';
        }, getStepperShadow: function (defaultValue) {
            return `<shadow type="math_number"><field name="NUM">0</field></shadow>`;

        }
    }


    MCED.Defaults.values.minecraft_create_door = {
        POSITION: {
            default: '{"x":0,"y":0,"z":0}',
            shadow: Blockly.BlocklyUtils.get3dPickerShadow()
        }, FACING: {default: "NORTH"}
    };

    MCED.Defaults.values.minecraft_set_block = {
        TYPE: {
            default: "WOOD_PLANKS",
            shadow: '<shadow type="minecraft_block"></shadow>'
        }, POSITION: {default: '{"x":0,"y":0,"z":0}', shadow: MCED.BlocklyUtils.get3dPickerShadow()}
    };

    MCED.Defaults.values.minecraft_set_blocks = {
        TYPE: {
            default: "WOOD_PLANKS",
            shadow: '<shadow type="minecraft_block"></shadow>'
        },
        POSITION: {default: '{"x":0,"y":0,"z":0}', shadow: MCED.BlocklyUtils.get3dPickerShadow()},
        SIZE: {default: '{"x":0,"y":0,"z":0}', shadow: MCED.BlocklyUtils.get3dPickerShadow()}
    };

    MCED.Defaults.values.minecraft_set_floor = {
        TYPE: {
            default: "WOOD_PLANKS",
            shadow: '<shadow type="minecraft_block"></shadow>'
        }, SIZE: {default: 3, shadow: MCED.BlocklyUtils.getStepperShadow(3)}
    };

    MCED.Defaults.values.minecraft_create_shape = {
        FILLED: {default: "FALSE"},
        SHAPE: {default: "CUBE"},
        POSITION: {default: '{"x":0,"y":0,"z":0}', shadow: MCED.BlocklyUtils.get3dPickerShadow()},
        TYPE: {default: "WOOD_PLANKS", shadow: '<shadow type="minecraft_block"></shadow>'},
        RADIUS: {default: 3, shadow: MCED.BlocklyUtils.getStepperShadow(3)},
        SIZE: {default: 3, shadow: MCED.BlocklyUtils.getStepperShadow(3)},
        BASE: {default: 3, shadow: MCED.BlocklyUtils.getStepperShadow(3)}
    };

    MCED.Defaults.values.minecraft_create_column = {
        FILLED: {default: "FALSE"},
        POSITION: {default: '{"x":0,"y":0,"z":0}', shadow: MCED.BlocklyUtils.get3dPickerShadow()},
        TYPE: {default: "WOOD_PLANKS", shadow: '<shadow type="minecraft_block"></shadow>'},
        WIDTH: {default: 3, shadow: MCED.BlocklyUtils.getStepperShadow(3)},
        HEIGHT: {default: 3, shadow: MCED.BlocklyUtils.getStepperShadow(3)},
        AXIS: {default: "y"}
    };

    MCED.Defaults.values.minecraft_create_plane = {
        POSITION: {
            default: '{"x":0,"y":0,"z":0}',
            shadow: MCED.BlocklyUtils.get3dPickerShadow()
        },
        TYPE: {default: "WOOD_PLANKS", shadow: '<shadow type="minecraft_block"></shadow>'},
        WIDTH: {default: 3, shadow: MCED.BlocklyUtils.getStepperShadow(3)},
        HEIGHT: {default: 3, shadow: MCED.BlocklyUtils.getStepperShadow(3)},
        AXIS: {default: "y"}
    };
}
