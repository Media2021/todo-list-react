import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from "./components/UserPage";
import { Global } from '../src/components/GlobalState'
import { Box } from '@mui/material';
import LeftColum from './pages/LeftColum';

function App() {
  return (
    <Global
      Root={() => (
        <Router>
          <Box sx={{ display: "flex", height: "100vh" }}>
           
            <LeftColum/>

           
            <Box flex={1} p={3}>
              <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/user" element={<UserPage />} />
              
              </Routes>
            </Box>
          </Box>
        </Router>
      )}
    />
  );
}

export default App;
