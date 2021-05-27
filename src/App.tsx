import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextareaAutosize, Button } from '@material-ui/core';

import ProcessDatabase from './component/ProcessDatabase';

const App: React.FC = () => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [allowProcess, setAllowProcess] = useState<boolean>(true);

    const processDatabaseStructure = () => {
        if(textAreaRef.current!.value) {
            setAllowProcess(false);
            new ProcessDatabase(textAreaRef.current!.value);
            setAllowProcess(true);
        } else {
            alert("Enter your string...")
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                    <TextareaAutosize
                        ref={textAreaRef}
                        style={{width: '80%'}}
                        aria-label="maximum height"
                        placeholder="Paste your database structure only"
                    />
                    <Button variant="contained" color="primary" onClick={processDatabaseStructure} disabled={!allowProcess}>
                        Process
                    </Button>
            </header>
        </div>
    );
}

export default App;