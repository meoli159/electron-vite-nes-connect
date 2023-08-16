import {resolve, sep} from 'path';

export default {
  '*.{js,mjs,cjs,ts,mts,cts,tsx}': 'eslint --cache --fix',

  /**
   * Run typechecking if any type-sensitive files or project dependencies was changed
   * @param {string[]} filenames
   * @return {string[]}
   */
  '{yarn.lock,packages/**/{*.ts,*.tsx,tsconfig.json}}': ({filenames}) => {
    //package-lock.json,
    // if dependencies was changed run type checking for all packages
    if (filenames.some(f => f.endsWith('yarn.lock'))) {
      //change yarn.lock to package-lock.json
      return ['yarn run typecheck ']; //--if-present
    }

    // else run type checking for staged packages
    const fileNameToPackageName = filename =>
      filename.replace(resolve(process.cwd(), 'packages') + sep, '').split(sep)[0];
    return [...new Set(filenames.map(fileNameToPackageName))].map(
      p => `yarn run typecheck:${p} `, //add --if-present if use npm
    );
  },
};
