export default [
  {
    files: ['*.ts'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@angular-eslint/recommended',
      'plugin:@angular-eslint/template/process-inline-templates',
      'prettier'
    ],
    plugins: ['prettier'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case'
        }
      ],
      'prettier/prettier': 'error',
      'max-len': ['error', { code: 140 }]
    }
  },
  {
    files: ['*.html'],
    extends: ['plugin:@angular-eslint/template/recommended']
  }
];
