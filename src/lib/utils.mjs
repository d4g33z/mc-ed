/**
 * Class for a colour input field.
 * @param {string} colour The initial colour in '#rrggbb' format.
 * @param {Function=} opt_validator A function that is executed when a new
 *     colour is selected.
 * @extends {Blockly.Field}
 * @constructor
 */

export function defineMineCraftBlocklyUtils(Blockly) {

    Blockly.FieldColour = function (colour, opt_validator) {
        Blockly.FieldColour.superClass_.constructor.call(this, colour, opt_validator);
        this.addArgType('colour'); // Good practice for argument type checking
    };

// Use Blockly.utils.object.mixin for inheritance
    Blockly.utils.object.mixin(Blockly.FieldColour.prototype, Blockly.Field.prototype);
    Blockly.FieldColour.prototype.constructor = Blockly.FieldColour;

    /**
     * Mouse cursor style when over the hotspot that initiates the editor.
     */
    Blockly.FieldColour.prototype.CURSOR = 'default';

    /**
     * Install this field on a block.
     */
    Blockly.FieldColour.prototype.initView = function () {
        this.createBorderRect_();
        this.borderRect_.style['fillOpacity'] = '1';
        this.setValue(this.getValue()); // Ensure initial value is displayed
    };

    /**
     * Create a palette under the colour field.  (Placeholder - No actual picker)
     * @private
     */
    Blockly.FieldColour.prototype.createWidget_ = function () {
        var widgetContainer = document.createElement('div');
        return widgetContainer;
    };

    /**
     * Close the colour picker if this input is being deleted.
     */
    Blockly.FieldColour.prototype.dispose = function () {
        Blockly.WidgetDiv.hideIfOwner(this);
        Blockly.FieldColour.superClass_.dispose.call(this);
    };

    /**
     * Return the current colour.
     * @return {string} Current colour in '#rrggbb' format.
     */
    Blockly.FieldColour.prototype.getValue = function () {
        return this.colour_;
    };

    /**
     * Set the colour.
     * @param {string} colour The new colour in '#rrggbb' format.
     */
    Blockly.FieldColour.prototype.setValue = function (colour) {
        if (this.sourceBlock_ && this.sourceBlock_.rendered && this.sourceBlock_.workspace && this.sourceBlock_.workspace.options.readOnly) {
            return;
        }
        if (this.colour_ === colour) {
            return;
        }
        if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
            Blockly.Events.fire(new Blockly.Events.Change(this.sourceBlock_, 'field', this.name, this.colour_, colour));
        }
        this.colour_ = colour;
        if (this.borderRect_) {
            this.borderRect_.style.fill = colour || '#000'; // Handle null/undefined
        }
    };

    /**
     * Get the text from this field.
     * @return {string} Current text.
     */
    Blockly.FieldColour.prototype.getText = function () {
        return this.getValue();
    };

// The following two methods are *required* to be present.  Even though
// they don't *do* anything in this simple example, they are expected by
// Blockly's internal mixins.  If you omit them, you'll likely get errors.

    /**
     * Set the colours for this field.
     * @param {?Array.<string>} colours Array of colours, or null to use default.
     * @return {!Blockly.FieldColour} Returns itself (for method chaining).
     */
    Blockly.FieldColour.prototype.setColours = function (colours) {
        return this; // For chaining
    };

    /**
     * Set the number of columns.
     * @param {number} columns Number of columns.
     * @return {!Blockly.FieldColour} Returns itself (for method chaining).
     */
    Blockly.FieldColour.prototype.setColumns = function (columns) {
        return this; // For chaining
    };
}
