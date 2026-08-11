function filterActiveUsers(users){
  if(!Array.isArray(users) || users.length === 0){
    return "Invalid";
  }


  const hasValidProperties = users.every(user => 
    typeof user === "object" && user !== null && "isActive" in user
  );

  if (!hasValidProperties){
    return "Invalid";
  }
  
  return users.filter(user => user.isActive === true);
}