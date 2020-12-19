

  

  

# Node Restful API wrapper

  

> a small package lets you interact with java server Via restful endpoints

  

  

you can use this package to run server then add your codes to interact with the java server of Data Structure Class Project available in [here](https://github.com/AshkanAbd/khat_noghte_rebuild)

  

  

## Installation

  

  

OS X & Linux & Windows:

  

  

```sh

  

npm install

  

npm run

  

```

  

>it will startup an instance of server as well so no need to run it sepreted

  

  

>but its recommended to read the API docs and understand how server works

  

  

## API
  

    localhost:3000/{Name}
as GET and will assign your bot to the server

    localhost:3000/{Name}/{coordinates}

as GET send the coordinates of your desire to chose the line to fill with your name
>the coordinates format must be X-Y

    localhost:3000/MAP/{Name}

as Get it will give you the last map you need to choose on
 
  

# Connection Diagrams

  

  

### Connection Establishment Phase

  

![if the above is not compiled](https://mermaid.ink/svg/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5cbkNsaWVudCAtLT4-IFNlcnZlcjogQ29ubmVjdGlvbiBlc3RhYmxpc2hlcy4uLlxuXG5DbGllbnQgLT4-IFNlcnZlcjogQ2xpZW50IE5hbWUgaW4gcGxhaW4gdGV4dCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

  

### After Connection Established


![link to diagram if not compiled](https://mermaid.ink/svg/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5cblNlcnZlci0-PiBDbGllbnQ6R2FtZXMgTWFwICgqKVxuXG5DbGllbnQgLT4-IFNlcnZlcjpDb3JyZGVuYXRlcyBpbiAnWC1ZJyBmcm9tYXQgKCopXG5cbk5vdGUgcmlnaHQgb2YgQ2xpZW50OigqKSBhbGwgdGhlIENvbm5lY3Rpb25zPGJyPiBIYXBwZW4gaW4gQmFzZTY0PGJyPiBFbmNvZGluZ1xuXG5TZXJ2ZXIgLT4-IENsaWVudDogaWYgb3RoZXIgQ2xpZW50IENob29zZSBhIGNvcmRpbmF0ZSBHYW1lIE1hcCAoKilcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

  

## Map

 

    2-1
    0-0
    @-@A@-@-@
    -#-#-#-#-
    @-@-@-@-@
    -#-#-#-#-
    @-@-@-@-@
    -#-#-#-#-
    @-@-@-@-@
    -#-#B#-#-
    @-@-@-@-@

2-1 ==> 2:your Id , 1:opponent Id

0-0 ==> Results so far

| Symbol | Meaning |
|--|--|
| A | Client with the id 1 |
| B | Client with the Id 2 |
| @ | Nodes |
| # | Blocks as Points |
| - | the Line Can be Chosen |
