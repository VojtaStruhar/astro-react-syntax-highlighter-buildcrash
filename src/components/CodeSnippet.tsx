
import SyntaxHighlighter from 'react-syntax-highlighter';
// esm errors, but cjs works
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230#issuecomment-568377353
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const codeString = '(num) => num + 1';

export default function CodeSnippet() {
    return <div>code snippet
        <SyntaxHighlighter language="javascript" style={a11yDark}>
            {codeString}
        </SyntaxHighlighter>
    </div>
}