const path = require('path');
const camelcase = require('camelcase');

module.exports = {
  process(src, filename) {
    const assetFilename = JSON.stringify(path.basename(filename));
    const pascalCaseFileName = camelcase(path.parse(filename).name, {
      pascalCase: true,
    });
    const componentName = `Svg${pascalCaseFileName}`;

    return `
      const React = require('react');
      module.exports = {
        __esModule: true,
        default: ${assetFilename},
        ReactComponent: React.forwardRef(function ${componentName}(props, ref) {
          return {
            $$typeof: Symbol.for('react.element'),
            type: 'svg',
            ref: ref,
            key: null,
            props: Object.assign({}, props, {
              children: ${assetFilename}
            })
          };
        }),
      };
    `;
  },
};
