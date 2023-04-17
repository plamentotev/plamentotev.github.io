import CodeBlock from '@theme/CodeBlock';
import React from 'react';

export default function CodeSnippet({
    code,
    ...props
}: {code: string}) {
    const snippet = extractSnippet(code);

    return (<CodeBlock {...props}>{snippet}</CodeBlock>);
}

// Returns the content between "%start_snippet%" and "%end_snippet%".
// All leading whitespace characters are trimmed. This is quite useful when
// importing code as the indentation of the first line is stripped.
function extractSnippet(code: string): string {
    const lines = code.split('\n');
    const startTagLine = lines.findIndex(line => line.includes('%start_snippet%'));
    const endTagLine = lines.findIndex(line => line.includes('%end_snippet%'));
    if (startTagLine < 0 || endTagLine < 0) {
        return '';
    }

    // string.slice end index is exclusive, that is why we do not substract one
    const startLine = startTagLine + 1;
    const endLine = endTagLine;
    if (endLine <= startLine) {
        return '';
    }

    // Strip all leading whitespace characters (on the first line) and return the result
    const snippetLines = lines.slice(startLine, endLine);
    const leadingWhitespaceChars = snippetLines[0].match(/^\s*/)?.[0] || '';

    return snippetLines
        .map(line => line.replace(leadingWhitespaceChars, ''))
        .join('\n');
}
