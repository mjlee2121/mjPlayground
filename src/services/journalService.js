import { supabase } from '../config/supabaseClient';

export const getJournals = async () => {
  const { data, error } = await supabase
    .from('journals')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
};

export const createJournal = async (entry) => {
  const { data, error } = await supabase
    .from('journals')
    .insert([entry]);
  if (error) throw error;
  return data;
};