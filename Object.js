var information = {
    name:"Sagar",
    phone:9999999,
    email:"Sagar21@gmail.com",
}
    function fn() {
        // console.log(information)
        //Accesiing or Reading the properties from an object
        // console.log(information.email)
        // console.log(information.name)     

        // Inserting or Write the new Property
        information.city="Delhi"            
        // console.log(information)

        //upate the property
          information.phone="8888888888"
          console.log(information)

          //deletion of property
          delete information.city
          delete information.email
          console.log(information)
    }
    fn()