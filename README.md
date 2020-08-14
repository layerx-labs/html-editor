# taikai-html-editor

> TAIKAI HTML Editor

## Install

```bash
npm install --save @taikai/html-editor
```

## Usage

```jsx
import { HtmlEditor }  from "@taikai/taikai-editor";

class Example extends Component {
  render () {
    return (
     <HtmlEditor
        placeholder="Yo, write something!"
        charMax={500}
        backgroundColor={true}
        inlineClass={true}
        align={true}
        list={true}
        indent={true}
        quote={true}
        image={true}
        video={true}
        table={true}
        emoticons={false}
        print={true}
      />
    )
  }
}
```

## Contributing

To publish the package run:

```
npm publish
```


## License

MIT © [taikai](https://github.com/taikai)
