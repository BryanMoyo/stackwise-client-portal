const SUPABASE_URL = "https://xxtkbradjhnunsdtcixz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_N25J3rSkkIB5LrNW9wEAlA_4h-xri-L";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
