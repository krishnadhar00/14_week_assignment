function uniqueCharactersCheck(name)
{
    const charSet = new Set();
    for(const keys of name)
    {
        if(charSet.has(keys))
        {
            console.log("The input strings contains duplicates.");
            return false;
        }
        charSet.add(keys);
    }
    console.log("The input string contains unique characters");
    return true;
}
uniqueCharactersCheck('mithun');
uniqueCharactersCheck('anurag');
