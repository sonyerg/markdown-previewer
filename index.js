marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
const defaultMd = `
# Header
## Subheader

[@sonyerg](https://github.com/sonyerg)
Inline code: \`console.log("Hello World")\`
\`\`\`
function example() {
  return "This is a code block";
}
\`\`\`
- List item
> This is a blockquote

![Image](https://via.placeholder.com/150)
**Bold text**`;

function App() {
  const [text, setText] = React.useState(defaultMd);

  return (
    <div className="px-4">
      <h1 className="p-4 text-center">Markdown Previewer</h1>
      <div className="text-center">
        <textarea
          name="text"
          id="editor"
          rows="10"
          cols="50"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="textarea"
        ></textarea>
      </div>
      <h3 className="mt-3 text-center">Output</h3>
      <Previewer text={text} />
    </div>
  );
}

function Previewer({ text }) {
  return (
    <div className="preview-container">
      <div
        dangerouslySetInnerHTML={{
          __html: marked(text, { renderer: renderer }),
        }}
        id="preview"
      ></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
