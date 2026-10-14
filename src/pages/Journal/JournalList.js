import React, { useEffect, useState } from 'react';
import { supabase } from '../../config/supabaseClient';
import { Link } from 'react-router-dom';

const JournalList = () => {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    const { data, error } = await supabase
      .from('journals')
      .select('id, title, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching journals:', error.message);
    } else {
      setJournals(data);
    }
    setLoading(false);
  };

  return (
    <section className="card journals-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ margin: 0 }}>Journals</h3>
        <Link to="/journal/new" style={{ fontSize: '0.85rem', textDecoration: 'none', color: '#2563eb', fontWeight: '600' }}>
          + Write Entry
        </Link>
      </div>

      {loading ? (
        <p>Loading journals...</p>
      ) : journals.length === 0 ? (
        <div>
          <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>No journal entries yet.</p>
          <Link to="/journal/new" style={{ color: '#2563eb', fontWeight: '500' }}>
            Write your first entry &rarr;
          </Link>
        </div>
      ) : (
        <ul className="journal-list">
          {journals.map((journal) => (
            <li key={journal.id}>
              <Link to={`/journals/${journal.id}`} className="journal-link">
                {journal.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default JournalList;