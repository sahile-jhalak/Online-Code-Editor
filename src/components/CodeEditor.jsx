import React, { useRef, useState } from 'react'
import {Editor } from '@monaco-editor/react'
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../constants';
import { Box, HStack } from '@chakra-ui/react';
import Output from './Output';

const CodeEditor = () => {
    const editorRef=useRef();
    const [value, setVlaue] = useState('');
    const [language, setLanguage] = useState('Select Language...')

    const onMount=(editor)=>{
        editorRef.current=editor;
        editor.focus();
    };

    const onSelect= (language) =>{
        setLanguage(language);
        setVlaue(CODE_SNIPPETS[language]);
    }
  return (
    <Box>
        <HStack spacing={4} >
            <Box w='50%' >
               <LanguageSelector language={language} onSelect={onSelect} />
                <Editor 
                    height="75vh" 
                    theme='vs-dark' 
                    language={language}
                    defaultValue="" 
                    onMount={onMount}
                    value={value}
                    onChange={(value)=>setVlaue(value)}
                /> 
            </Box>
            <Output editorRef={editorRef} language={language} />
        </HStack>
        
    </Box>
  )
}

export default CodeEditor