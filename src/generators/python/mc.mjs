export function installMCGenerator(pythonGenerator) {
    pythonGenerator.forBlock['minecraft_create_column'] = function (block,generator) {

        const positionValue = block.getFieldValue('POSITION');

        let code = '';
    }


}