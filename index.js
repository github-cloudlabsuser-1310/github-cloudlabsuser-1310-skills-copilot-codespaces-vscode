

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];
// Flatten the array of arrays and extract names
const flattenedData = data.flat();
const extractedNames = flattenedData.map(person => person.name);
console.log(extractedNames); // Output: ['John', 'Jane', 'Bob']

const names = data.flat().map(person => person.name);
console.log(names); // Output: ['John', 'Jane', 'Bob']

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState("type markdown here");

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    const reverseSentence = (sentence) => {
        const reversed = sentence.split(' ').reverse().join(' ');
        return reversed.charAt(0).toUpperCase() + reversed.slice(1);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
            <textarea
                style={{
                    width: '100%',
                    height: '200px',
                    marginBottom: '20px',
                    padding: '10px',
                    fontSize: '16px',
                }}
                value={markdown}
                onChange={handleChange}
            />
            <div
                style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#f9f9f9',
                }}
            >
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
            <div
                style={{
                    marginTop: '20px',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    backgroundColor: '#e9e9e9',
                }}
            >
                <strong>Reversed Sentence:</strong> {reverseSentence(markdown)}
            </div>
    );
    );</div></div>
}