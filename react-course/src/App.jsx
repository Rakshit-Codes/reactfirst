function App() {
    let message = 'hey there!';
    if (Math.random()>0.5) {
        message = 'Good morning!';
        console.log(message);
    }
    return <h1>{message}</h1>; 

    
}

export default App; // 👈 Add this line
  