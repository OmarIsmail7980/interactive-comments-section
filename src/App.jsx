import { useState } from 'react'
import { Comment, TextInput } from './components';

function App() {

  return (
    <div className="h-screen bg-[#eaecf1] relative">
      <h1>Hello</h1>
      <section className="flex justify-center">
        <Comment />
      </section>

      <TextInput />
    </div>
  );
}

export default App
