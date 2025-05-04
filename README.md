# FullSystemCDN

## Table of Contents

- [CMDBox](#CMDBox)

---

## CMDBox

## Documentation

`CMDBox` is a customizable, draggable, resizable, and animated command-line-like UI component written in JavaScript. It's perfect for adding a retro terminal experience to your web project.

---

## 🚀 Features

- ✅ Draggable by mouse
- ✅ Resizable via handle
- ✅ Animated show/hide transitions
- ✅ Text input with Enter key capture
- ✅ Fully customizable (colors, font, size, etc.)
- ✅ Append/output lines like a terminal

---

## 📦 Installation

Include your CDN script or embed the class code directly in your HTML file:

```html
<script src="https://raw.githubusercontent.com/diazdon07/FullSystemCDN/refs/heads/main/cdmBox.js?token=GHSAT0AAAAAAC53VO3DXITY2TYH3EOQESDK2AXHXSA"></script>
```
or
```html
<script src="path-to-your-cdn/cmdbox.js"></script>
```

---

## 🧱 Usage Example

```javascript
// Create and show the CMD box
const cmd = new CMDBox({
  backgroundColor: '#000',
  textColor: '#0f0',
  fontSize: '14px',
  fontFamily: 'monospace',
  width: 600,
  height: 400,
  initialText: 'C:\\> Hello World\nC:\\>_',
});

cmd.show();

// Handle user input on Enter
cmd.onEnter = (text) => {
  console.log('User typed:', text);
  cmd.appendLine(`You typed: ${text}`);
};
```

---

## 🧰 Constructor Options

| Option         | Type     | Default                              | Description                          |
|----------------|----------|--------------------------------------|--------------------------------------|
| `width`        | `number` | `500`                                | Initial width in pixels              |
| `height`       | `number` | `300`                                | Initial height in pixels             |
| `minWidth`     | `number` | `200`                                | Minimum width when resizing          |
| `minHeight`    | `number` | `100`                                | Minimum height when resizing         |
| `initialText`  | `string` | `'C:\\> Welcome to CMD-like box\nC:\\>_'` | Initial text inside the box          |
| `backgroundColor` | `string` | `'#1e1e1e'`                       | Background color                     |
| `textColor`    | `string` | `'#00ff00'`                          | Text color                           |
| `fontFamily`   | `string` | `'monospace'`                        | Font family                          |
| `fontSize`     | `string` | `'14px'`                             | Font size                            |

---

## 🧪 Methods

### `cmd.show()`
Displays the CMD box with animation.

### `cmd.hide()`
Hides the CMD box with animation.

### `cmd.toggle()`
Toggles visibility (show/hide) of the CMD box.

### `cmd.setText(text)`
Replaces all text in the CMD box.

### `cmd.appendLine(text)`
Appends a new line of text and scrolls to the bottom.

### `cmd.onEnter = (text) => { ... }`
Assign a function to be triggered when the **Enter** key is pressed. The full text in the box is passed as an argument.

---

## 🎨 Styling Customization

CMDBox supports styling customization through constructor options or by modifying CSS:

- **Box background** → `backgroundColor`
- **Text color** → `textColor`
- **Font** → `fontFamily`, `fontSize`
- **Border & padding** → Can be edited in the `createStyles()` function in the class

---

## 🧱 Internals

CMDBox generates the following DOM elements:

- `.cmd-box` → main container (`div[contenteditable]`)
- `.resize-handle` → bottom-right corner for resizing

It also injects a `<style>` tag into the document for animation and layout styling.

---

## 📝 Notes

- Only text typed inside the box is captured.
- Use `onEnter` to react to commands typed by the user.
- You can extend or override the `onEnter` method to implement your own logic.

---

## 📄 License

MIT License

---

## 🛠️ To Do

- Add support for command history
- Command parsing and execution
- Option for read-only display

---

Happy hacking! 😎
