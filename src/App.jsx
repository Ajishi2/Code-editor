import React, { useEffect } from 'react';
import { Button, Box } from '@mui/material';

const App = () => {
  const triggerRunCode = () => {
    const iframe = document.querySelector('iframe');
    iframe.contentWindow.postMessage({
      eventType: 'triggerRun',
    }, "*");
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === 'https://onecompiler.com') {
        if (event.data.eventType === 'populateCode') {
          const code = event.data.files[0].content;
          console.log('Code from editor:', code);
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <Box sx={{ padding: '16px', textAlign: 'center' }}>
      <h1>Code Editor</h1>
      <iframe
        src="https://onecompiler.com/embed/javascript?listenToEvents=true"
        width="100%"
        height="500px"
        frameBorder="0"
        title="Code Editor"
      ></iframe>

      <Button
        variant="contained"
        color="primary"
        onClick={triggerRunCode}
        sx={{ marginTop: '16px' }}
      >
        Run Code
      </Button>
    </Box>
  );
};

export default App;
