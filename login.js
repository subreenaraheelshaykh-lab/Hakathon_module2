const supabaseKey = "sb_publishable_BICPLh3XKfM2WFlN7zxlrg_JzQLMgSd"
const supabaseUrl = "https://asshuqbgftvjljxhchxj.supabase.co"

const{createClient} = supabase
const client = createClient(supabaseUrl, supabaseKey)

console.log(client);

let submit = document.querySelector("#submitbtn")


let  usersemail = document.querySelector("#email")
let  userspassword = document.querySelector("#password")
submit && submit.addEventListener("click", async(event)=>{
    event.preventDefault()
    if ( !usersemail.value || !userspassword.value){
       return 
    }
    try {
        const { error } = await client
  .from('profile')
  .insert([{
    email : usersemail.value
  }])
  
  usersname.value =  ""
  usersname.value =  ""

  window.location.href = "./login.html"
    
    }
    catch(error){
        console.log(error)
    };
    
})


console.log(window.location.pathname)
if(window.location.pathname == "/C:/Hakathon_module2/index.html"){
   const getAllData = async()=>{
    try{
         const { data, error } = await client
  .from('profile')
  .select("name,email");
  console.log(data)
    }
    catch(error){
        console.log(error)
    }
   } 
}
