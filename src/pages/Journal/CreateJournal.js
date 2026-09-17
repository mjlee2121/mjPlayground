import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const CreateJournal = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Publishing...');

    const { data, error } = await supabase
      .from('journals')
      .insert([{ title, content }]);

    if (error) {
      setStatus(`Error: ${error.message}`);
    } else {
      setStatus('Journal published successfully!');
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="card">
      <h2>Write New Journal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your journal entry..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          required
        />
        <button type="submit">Publish Entry</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default CreateJournal;