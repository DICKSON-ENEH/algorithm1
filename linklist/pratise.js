class linkedlist {
    constructor(){
        this.head = null;
        this.tail=null;
    }
 append(value){
     let node = {value:value , next: null}

     // append this .tail.next = node adds to the next as node  this.tail will be the node if not the head then the head is the node 
     if(this.tail){
         this.tail.next=node
     } else{
         this.tail= node;
         if (!this.head){
             this.head=node
         }
     }

    }

    prepend(value){
        let node = {value:value, next :this . head}
        if(this.head){
            this.head = node 
        }
    }
 
}
const build = new linkedlist();
build.append("dickson")
build.append("joseph")
build.append("samuel")
build.prepend("idris")
  console.log(build)