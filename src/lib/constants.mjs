// src/lib/constants.mjs
import { MCED } from "./utils.mjs"; // Import the MCED object

export function defineMineCraftConstants(Blockly) {

    // Add Blockly.Msg definitions
    Blockly.Msg = {  //<-- Assign to Blockly.Msg
        ...Blockly.Msg, // Important: Keep existing messages!
        MINECRAFT_COLUMN: "column",
        MINECRAFT_COLUMN_WIDTH: "width",
        MINECRAFT_COLUMN_HEIGHT: "height",
        MINECRAFT_COLUMN_TYPE: "type",
        MINECRAFT_COLUMN_FILLED: "filled",
        MINECRAFT_PLANE: "plane",
        CATEGORY_CRAFT: "Craft",
        CATEGORY_BLOCKS: "Blocks", //Added
        CATEGORY_POSITION: "Position", //Added
        MINECRAFT_SET_BLOCK: "set block",
        MINECRAFT_TYPE: "type",
        MINECRAFT_SET_BLOCKS: "set blocks",
        MINECRAFT_SIZE: "size",
        MINECRAFT_SET_FLOOR: "set floor",
        MINECRAFT_CREATE_DOOR: "create door",
        MINECRAFT_CREATE_DOOR_FACING: "facing",
        MINECRAFT_FACING_NORTH: "north",
        MINECRAFT_FACING_SOUTH: "south",
        MINECRAFT_FACING_EAST: "east",
        MINECRAFT_FACING_WEST: "west",
        MINECRAFT_CREATE_SHAPE: "create shape",
        MINECRAFT_SHAPE_CUBE: "cube",
        MINECRAFT_SHAPE_SPHERE: "sphere",
        MINECRAFT_SHAPE_PYRAMID: "pyramid",
        MINECRAFT_PRIMITIVE_TYPE: "type",
        MINECRAFT_CREATE_SHAPE_POSITION: "position",
        MINECRAFT_PRIMITIVE_SIZE: 'size',
        MINECRAFT_PRIMITIVE_RADIUS: 'radius',
        MINECRAFT_PRIMITIVE_BASE: 'base',
    };

    // Add Blockly.ALIGN_RIGHT
    Blockly.ALIGN_RIGHT = 'RIGHT'; //<-- Assign to Blockly.ALIGN_RIGHT

    // Now populate MCED.Defaults.values, as before
    MCED.Defaults.values.minecraft_create_shape = {
        FILLED: {default: "FALSE"},
        SHAPE: {default: "CUBE"},
        POSITION: {default: '{"x":0,"y":0,"z":0}', shadow: MCED.BlocklyUtils.get3dPickerShadow()},
        TYPE: {default: "WOOD_PLANKS", shadow: '<shadow type="minecraft_block"></shadow>'},
        RADIUS: {default: 3, shadow: MCED.BlocklyUtils.getStepperShadow(3)},
        SIZE: {default: 3, shadow: MCED.BlocklyUtils.getStepperShadow(3)},
        BASE: {default: 3, shadow: MCED.BlocklyUtils.getStepperShadow(3)}
    };

    MCED.Defaults.values.minecraft_create_door = {
        POSITION: {
            default: '{"x":0,"y":0,"z":0}',
            shadow: MCED.BlocklyUtils.get3dPickerShadow()
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