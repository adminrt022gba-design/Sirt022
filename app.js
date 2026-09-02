function getSupabase() {
  if (typeof window.supabase === "undefined") {
    console.error("Library Supabase belum dimuat.");
    return null;
  }

  const url = window.SUPABASE_URL;
  const key =
    window.SUPABASE_ANON_KEY ||
    window.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    console.error("SUPABASE_URL atau SUPABASE_ANON_KEY belum tersedia.");
    return null;
  }

  return window.supabase.createClient(url, key);
}
