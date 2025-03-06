// src/lib/utils.mjs

export let MCED;

export function defineMineCraftBlocklyUtils(Blockly) {

    /**
     * Class for a colour input field.
     */
    Blockly.FieldColour = class extends Blockly.Field {
        static fromJson(options) {
            return new Blockly.FieldColour(options.colour, null);
        }

        constructor(colour, opt_validator) {
            super(colour, opt_validator);
            // this.addArgType('colour');
            this.setValue(colour);
            this.colour_ = '#000000'; // Set a default value
        }

        initView() {
            this.createBorderRect_();
            this.borderRect_.style['fillOpacity'] = '1';
            this.setValue(this.getValue());
        }

        createWidget_() {
            return document.createElement('div'); // Placeholder
        }

        dispose() {
            Blockly.WidgetDiv.hideIfOwner(this);
            super.dispose();
        }

        getValue() {
            return this.colour_;
        }

        setValue(colour) {
            if (this.sourceBlock_ && this.sourceBlock_.rendered && this.sourceBlock_.workspace && this.sourceBlock_.workspace.options.readOnly) {
                return;
            }
            if (this.colour_ === colour) {
                return;
            }
            if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
                Blockly.Events.fire(new Blockly.Events.BlockChange(this.sourceBlock_, 'field', this.name, this.colour_, colour));
            }
            this.colour_ = colour;
            if (this.borderRect_) {
                this.borderRect_.style.fill = colour || '#000';
            }
        }

        getText() {
            return this.getValue();
        }

        setColours(colours) {
            return this;
        }

        setColumns(columns) {
            return this;
        }
    };


    Blockly.fieldRegistry.register('field_colour', Blockly.FieldColour); // Use fieldRegistry

    Blockly.FieldAxis = class extends Blockly.FieldDropdown {
        static fromJson(options) {
            return new Blockly.FieldAxis(options.value, options.validator);
        }

        constructor(value, options) {
            const dropdownOptions = options.map(opt => [opt, opt]);
            super(dropdownOptions); // Call the parent (FieldDropdown) constructor using 'super'.
            this.setValue(value);
        }
    };


    Blockly.fieldRegistry.register('field_axis', Blockly.FieldAxis); // Use fieldRegistry

    MCED = {  // Export directly
        BlocklyUtils: {
            configureShadow: function (block, inputName) {
                let shadowValue = MCED.Defaults.values[block.type]?.[inputName]?.shadow;
                if (shadowValue) {
                    block.getInput(inputName).connection.setShadowDom(Blockly.utils.xml.textToDom(shadowValue));
                }
            },
            get3dPickerShadow: () => '<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>',
            getStepperShadow: (defaultValue) => `<shadow type="math_number"><field name="NUM">${defaultValue}</field></shadow>`,
        }, Defaults: {values: {}}
    };

}