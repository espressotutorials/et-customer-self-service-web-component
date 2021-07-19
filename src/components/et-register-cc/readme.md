# Self Service Registration Web Component

This web competence offers users a self-service registration for the online learning platform et.training.

## Installation

We published this component to npm, you could load the component through a CDN, you could include the components using an import statement. Note that type="module" only works in modern browsers (not available in IE11 or Edge 12-18).

```html
<html>
<head>
  <script type="module">
    import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@espressotutorialsgmbh/et-customer-self-service-web-component/loader/index.es2017.js';
    defineCustomElements();
  </script>
</head>
<body>
<et-register-cc language="de"></et-register-cc>
</body>
</html>
```

### Framework Integrations

#### Angular
Please visit the official documentation [https://stenciljs.com/docs/angular](https://stenciljs.com/docs/angular)

#### React
Please visit the official documentation [https://stenciljs.com/docs/react](https://stenciljs.com/docs/react)

#### Vue
Please visit the official documentation [https://stenciljs.com/docs/vue](https://stenciljs.com/docs/vue)

#### Ember
Please visit the official documentation [https://stenciljs.com/docs/ember](https://stenciljs.com/docs/ember)

#### JavaScript
Please visit the official documentation [https://stenciljs.com/docs/javascript](https://stenciljs.com/docs/javascript)


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type     | Default     |
| ---------- | ---------- | ----------- | -------- | ----------- |
| `language` | `language` | Language    | `string` | `undefined` |


## CSS Custom Properties

| Name                | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `--color-gray-200`  | Input background color                                    |
| `--color-gray-500`  | Privacy policy description text color, Input border color |
| `--color-gray-700`  | Label text color, Input text color                        |
| `--color-green-500` | Success message color                                     |
| `--color-key-500`   | Button background color                                   |
| `--color-key-600`   | Button hover background color                             |
| `--color-red-500`   | Error message color                                       |
| `--color-white`     | Success / Error message text color                        |
| `--font-family`     | Base font family                                          |
| `--font-size`       | Base font size                                            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
