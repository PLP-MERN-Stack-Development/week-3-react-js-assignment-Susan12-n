import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Button from '../components/button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Posts from './pages/Posts';
import TaskManager from './components/TaskManager';

function App() {
  const [count, setCount] = useState(0);

  return (


    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      { <Navbar /> }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Posts />} />
      </Routes>
        
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
          
            <div className="flex items-center gap-4 my-4">
              <button
                onClick={() => setCount((count) => count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-bold">{count}</span>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-4">
               
               { <TaskManager /> }
              
            </p>
          </div>
        </div>
        

        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <p className="text-gray-500 dark:text-gray-400">
           { <Posts /> }

          </p>
        </div>
      </main>

      { <Footer /> }
      
    </div>
  );
}

export default App; 