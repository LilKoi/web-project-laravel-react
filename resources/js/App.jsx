import React from 'react';
import { createRoot } from 'react-dom/client'
import Button from "@mui/material/Button"

export default function App(){
    return(
        // <h1>Привет</h1>
        <Button variant="contained">Hello World</Button>
    );
    
}
createRoot(document.getElementById('root')).render(<App/>)
