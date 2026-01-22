//This is going to by my true first component that I created from scratch.

//From the understanding that I have right now, React components consist of three main parts:
// 1. Importing dependencies
// 2. Defining the component
// 3. Exporting the component


//importing dependencies
//For the main window component, 
import React, { use } from 'react';
import 'react-dom';
//Now I am going to import the example API hook that I created.
import useExampleAPI from '../hooks/exampleAPI.jsx';
//Now I'm going to import the ExampleSCP component to display inside the main window.
import ExampleSCP from './ExampleSCP.jsx';

//Making the main window component
function MainWindow(){
    //using the api hook to get data
    const apiData = useExampleAPI();
    
    return(
        <div className="main-window debug-border">
            <h1>Main Window Component</h1>
            <p>This is the main window of the application.</p>
            <p>Data from Example API Hook: {apiData}</p>
            <ExampleSCP />
        </div>
        
        
    );
}

//exporting the component
export default MainWindow;
