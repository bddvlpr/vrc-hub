import antfu from '@antfu/eslint-config';
import perfectionistAlphabetical from 'eslint-plugin-perfectionist/configs/recommended-alphabetical';

export default antfu({
  ignores: ['**/openapi-spec.ts'],
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
  },
  typescript: true,
}).append(perfectionistAlphabetical);
