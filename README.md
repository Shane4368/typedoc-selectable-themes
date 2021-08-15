# typedoc-selectable-themes

Custom themes for TypeDoc that can be selected from the toolbar.
See preview in [this repository](https://github.com/Shane4368/dummy-typescript-project).

## Setup

```bash
# Install as dev dependency
npm install --save-dev shane4368/typedoc-selectable-themes
```

### CLI

```bash
# Use default theme
typedoc --options typedoc.json --theme node_modules/typedoc-selectable-themes/bin/default

# Use minimal theme
typedoc --options typedoc.json --theme node_modules/typedoc-selectable-themes/bin/minimal
```

### typedoc.json

```json
{
    "theme": "node_modules/typedoc-selectable-themes/bin/default",
    "highlightTheme": "material-ocean"
}
```

## Contributing

Contributions are welcome and appreciated. You can find TypeDoc on GitHub, feel free to start
an issue or create a pull requests:<br>
[https://github.com/TypeStrong/typedoc](https://github.com/TypeStrong/typedoc)

To use a local build of this project, run the `npm pack` command in this directory. Then
in the project where you want to use your local build run `npm install ../path/to/typedoc-default-themes-VERSION.tgz`

## License

Copyright (c) 2015 [Sebastian Lenz](http://www.sebastian-lenz.de).<br>
Copyright (c) 2016-2020 [TypeDoc Contributors](https://github.com/TypeStrong/typedoc/graphs/contributors).<br>
Licensed under the Apache License 2.0.
