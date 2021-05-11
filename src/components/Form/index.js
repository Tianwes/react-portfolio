import React from "react";

function Form () {
return (
    <div>
 <form>
     <div class="form-group mb-3">
       <label for="name-input">Name</label>
       <input type="text" class="form-control" id="name-input" placeholder="Name" />
     </div>

     <div class="form-group mb-3">
       <label for="email-input">Email Address</label>
       <input type="email" class="form-control" id="email-input" placeholder="Your Email" />
     </div>

     <div class="form-group mb-3">
       <label for="message-input">Message:</label>
       <textarea class="form-control" id="message-input" rows="3"></textarea>
     </div>
     <button type="submit" class="btn btn-primary button-bg mb-3">Submit</button>
   </form>
   </div>
 )};

 export default Form;