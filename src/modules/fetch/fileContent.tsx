import { useState, useEffect } from 'react';

interface Props {
  url: string
}

const FileContent: React.FC<Props>  = ({ url }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    async function fetchData() { 
      const response = await fetch(url);
      const text = await response.text(); 
      setContent(text);
    }
    fetchData();
  }, [url]);

  return (
    <div>
      <pre>{content}</pre>
    </div>
  );
}

export default FileContent;
