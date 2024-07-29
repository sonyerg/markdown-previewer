marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
const defaultMd = `
# Hello
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
    <div className="text-center px-4">
      <h1 className="p-4">Markdown Previewer</h1>
      <textarea
        name="text"
        id="editor"
        rows="10"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea"
      />
      <h3 className="mt-3">Output</h3>
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
