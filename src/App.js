import './App.css';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Mermaid from 'react-mermaid2';


function App() {
  const file_name = './output.md';
  const [post, setPost] = useState('');

  useEffect(() => {
    fetch(file_name)
      .then(res => res.text())
      .then(text => setPost(text))
  }, [])

  return (
    <>
      <ReactMarkdown remarkPlugins={(gfm)} components={{ mermaid: Mermaid  }}>
        {post}
      </ReactMarkdown>
    </>
  );
}

export default App;
