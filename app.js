const supabaseKey = "sb_publishable_BICPLh3XKfM2WFlN7zxlrg_JzQLMgSd"
const supabaseUrl = "https://asshuqbgftvjljxhchxj.supabase.co"

const{createClient} = supabase
const client = createClient(supabaseUrl, supabaseKey)

console.log(client);

let submit = document.querySelector("#submitbtn")


let usersname = document.querySelector("#name")
let  usersemail = document.querySelector("#email")
let  userspassword = document.querySelector("#password")
submit.addEventListener("click", async(event)=>{
    event.preventDefault()
    try {
        const { error } = await client
  .from('profiles')
  .insert([{
    name : usersname.value,
    email : usersemail.value
  }])
    
    }
    catch(error){
        console.log(error)
    };
    
})
