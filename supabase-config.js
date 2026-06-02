// This file initializes Supabase. 
// While separate, it is still technically public to anyone who inspects the network.
const SUPABASE_URL = 'https://zkaffxvincheclkmtfgz.supabase.co'; 
const SUPABASE_ANON_KEY = 'sb_publishable_bWGg5-BvOet3eocjqdPFVg_gwOvUHaP';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);