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

    if (!error) {
      setJournals(data);
    }
    setLoading(false);
  };

  if (loading) return <p>Loading journals...</p>;

  return (
    <div className="card journals-card">
      <h3>Journals</h3>
      <ul className="journal-list">
        {journals.map((journal) => (
          <li key={journal.id}>
            <Link to={`/journals/${journal.id}`} className="journal-link">
              {journal.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JournalList;