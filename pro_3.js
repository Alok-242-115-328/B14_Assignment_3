function countHashtags(caption){

  if(typeof caption !== "string"){
    return "Invalid";
  }

  const words = caption.split(" ");
  let hashtagCount = 0;
  let longestTag = "";

  for(let i = 0; i < words.length; i++){
  const word = words[i];


    if(word.startsWith("#") && word.length > 1){
    hashtagCount++;
    const cleanTag = word.slice(1);

    if (cleanTag.length > longestTag.length){
    longestTag = cleanTag;
      }
    }
  }

  return{
    hashtagCount: hashtagCount,
    longestTag: longestTag
  };
}