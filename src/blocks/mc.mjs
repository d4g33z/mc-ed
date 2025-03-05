console.log("mc.mjs: Start of file execution");
export function defineMineCraftBlocks(Blockly) {
    console.log("mc.mjs: Inside defineMineCraftBlocks")

    Blockly.Blocks['dummy_block'] = {
        init: function() {
            console.log("mc.mjs: Inside init() function of ...");
        }

    };

    Blockly.Blocks['minecraft_create_column'] = {
        init: function() {
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
                // this.appendDummyInput()
                //     .appendField(Blockly.Msg.MINECRAFT_COLUMN_FILLED)
                //     .appendField(new Blockly.FieldCheckbox("FALSE"), "FILLED")
                //     .setAlign(Blockly.ALIGN_RIGHT);

                Blockly.BlocklyUtils.configureShadow(this, "POSITION");
                Blockly.BlocklyUtils.configureShadow(this, "WIDTH");
                Blockly.BlocklyUtils.configureShadow(this, "HEIGHT");
                Blockly.BlocklyUtils.configureShadow(this, "TYPE");
            }
        }
    };
}