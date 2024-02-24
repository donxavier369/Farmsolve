import React from 'react'
import "./Write.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TextField from '@mui/material/TextField';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';


function Write() {
  const [markdownText, setMarkdownText] = useState('');

  const handleChange = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Enter Markdown Text"
        multiline
        rows={4}
        variant="outlined"
        value={markdownText}
        onChange={handleChange}
      />
      <div style={{ marginTop: '16px' }}>
        <h2>Preview:</h2>
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Write