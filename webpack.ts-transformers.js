const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

const getCustomTransformers = () => ({ before: [styledComponentsTransformer] });

module.exports = getCustomTransformers;
