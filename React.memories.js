React Notes

#2
Render()
  -Only returns one tag
      return(
        <div class="parent">
          EVERYTHING
        </div>
      )
  -we can declare variables  and passing by handlevars syntax
      let name = "Maxi"
        <h1> Hi im {name}</h1>
  Inside handlevars you can execute almost any JS 
        <h1> Hi im {this.myMethod(param)}</h1>
        
  -Bercause its a class you can have a constructor method (always execute super() first)
    {
      constructor(){
        super();
        this.myName = "maxi";
      }
    }
  
    
