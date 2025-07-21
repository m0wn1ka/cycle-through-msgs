# cycle-through-msgs
## tech used
- js : chrome extension
## how it can be used
- in chat gpt usually happens a two way communication
- so we type something and we get response and we again type some other 
- later we want to check the answer of the second question we asked 
- so by clicking this button we can navigate through all the user msgs divs
- so now user will be able to scroll through all of them easily
## how to use locally
- turn on developer mode in exetensions tab
- load upacked the code
- referesh the chat gpt page
## technical
- manifest.json : we decalre the name,description,author,content script
- in content script we create a button with fixed position
- now on click of the button we fetch all the elements by `whitespace-pre-wrap`
- we then scroll through them 
