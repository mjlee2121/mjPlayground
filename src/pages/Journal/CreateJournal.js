import React, { useState } from 'react';
import { supabase } from '../../config/supabaseClient'; // Adjusted relative path
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../../component/NavBar';
import Footer from '../../component/Footer';

const CreateJournal = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Publishing...');

    const { error } = await supabase
      .from('journals')
      .insert([{ title, content }]);

    if (error) {
      setStatus(`Error: ${error.message}`);
    } else {
      setStatus('Journal published successfully!');
      setTitle('');
      setContent('');
      // Redirect to main page after 1 second
      setTimeout(() => navigate('/'), 1000);
    }
  };

  return (
    <div className="universal-bg app-layout">
      <NavBar />
      <main className="main-content" style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <Link to="/" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500' }}>
          &larr; Back to Dashboard
        </Link>

        <div className="card" style={{ marginTop: '1.5rem', padding: '2rem' }}>
          <h2 style={{ marginTop: 0 }}>Write New Journal</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                fontSize: '1rem'
              }}
            />
            <textarea
              placeholder="Write your journal entry..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="8"
              required
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
            />
            <button 
              type="submit"
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Publish Entry
            </button>
          </form>
          {status && <p style={{ marginTop: '1rem', color: '#374151' }}>{status}</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateJournal;