const supabaseKey = "sb_publishable_BICPLh3XKfM2WFlN7zxlrg_JzQLMgSd"
const supabaseUrl = "https://asshuqbgftvjljxhchxj.supabase.co"

const{createClient} = supabase
const client = createClient(supabaseUrl, supabaseKey)

console.log(client);
