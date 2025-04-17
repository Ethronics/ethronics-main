# Ethronics Project

Welcome to the Ethronics project! This repository is a modern web application built with **React**, **TypeScript**, and **Vite**. It provides a robust foundation for building scalable and high-performance applications with a focus on developer experience.

## Features

- **React**: A powerful library for building user interfaces.
- **TypeScript**: Static typing for JavaScript to improve code quality and maintainability.
- **Vite**: A fast build tool with Hot Module Replacement (HMR) for an efficient development workflow.
- **ESLint**: Configured with recommended rules to ensure code consistency and quality.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/ethronics.git
cd ethronics
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

## ESLint Configuration

This project includes a basic ESLint setup. For production applications, we recommend expanding the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

### Additional Plugins

You can enhance your linting setup with the following plugins:

- [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x): Provides React-specific lint rules.
- [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom): Adds lint rules for React DOM.

Example configuration:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## Contributing

We welcome contributions! Feel free to open issues or submit pull requests to improve the project.

## License

This project is licensed under the [MIT License](LICENSE).

Happy coding!
