var planner = {
     items: [
         {time: "9am", item: ""},
         {time: "10am", item: ""},
         {time: "11am", item: ""},
         {time: "12pm", item: ""},
         {time: "1pm", item: ""},
         {time: "2pm", item: ""},
         {time: "3pm", item: ""},
         {time: "4pm", item: ""},
         {time: "5pm", item: ""},
     ],
     readItems: function() {
        var s = localStorage.getItem("plannerItems")
        if (s != null){
            this.items = JSON.parse(s);
        }
     },
     writeItems: function(){
         var s = JSON.stringify(this.items);
         localStorage.setItem("plannerItems", s);

     },
     displayItems: function(){

     }





}




$(document).ready(function (){
    console.log("this is working.")
    
    //planner.writeItems();
    planner.readItems();
    console.log(planner.items);



})