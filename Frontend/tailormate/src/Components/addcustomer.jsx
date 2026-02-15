import React from 'react'

const AddCustomer = () => {
  return (
    <div>
       <form>
            <h2>New Customer</h2>
            <label for="Name">Name:</label> 
                <input type="text" id="Name" name="Name" required minlength="4" maxlength="24" placeholder="Name"/>
            <label for="Name">Phone Number:</label> 
                <input type="text" id="Name" name="Name" required minlength="4" maxlength="24" placeholder="Phone Number"/>
            <label for="Name">Email:</label> 
                <input type="text" id="Name" name="Name" required minlength="4" maxlength="24" placeholder="example@email.com"/>
            <label for="Name">Address:</label> 
                <input type="text" id="Name" name="Name" required minlength="100" maxlength="500" placeholder="Full address please"/>
        </form>
    </div>
  )
}

export default AddCustomer