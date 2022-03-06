# Project Name
    * Drag and Drop Crashing Bugs Assigment *
     A really cool assigment to work on how to resolve JavaScript issues
     in a drag and drop puzzle game.
     
## Installation
	  You can access to the repo and clone it on GitHub here  
	  >> >> >> https://github.com/gonzomartin/DragandDrop
    
## Usage
    In this case this project is all setup to clone the repository on GitHub.
    On the files are multiple marks with notes of the intentions.
    
## Contributing
    Close for security reasons. 
    
## Investigation or Writen Plan
    The first problem that we have is that you can drop more than one piece
    on the same zone, so they way to solve it was to add to the function
    of the drop event a conditional loop that would make the value of the object
    that is in the zone no more than 1, so each zone can only have 1 child.
    
    The second problem that is reset the pieces to the original position when
    we change the puzzle with the bottom buttons was some sort complicate, we 
    have to zones, from puzzlepices to dropzones, we make it to add the last child
    but retriving everything back wasnt that easy, i tried to make a const a dragZone
    attaching the puzzle board class, and after that i just couldnt get to make it going back.
    
## Credits
    Not yet.
  
## License
    Rights reserve.
