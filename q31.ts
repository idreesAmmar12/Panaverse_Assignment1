const current_users: string[] = ["john", "jane", "jim", "jack", "jill"];
const new_users: string[] = ["john", "judy", "james", "joseph", "jenny"];

for (let user of new_users) 
{
  if (current_users.some((name) => name.toLowerCase() === user.toLowerCase())) 
  {
    console.log(
      "Sorry, the username "+user+" is not available. Please choose a different username."
    );
  }
   else 
   {
    console.log("The username "+user+" is available.");
  }
}