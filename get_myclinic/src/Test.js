import React, {useState} from "react"



function Test(e) {

    setUserData({...userData, name:"value"})

    const [userData, setUserData] = useState({
        name: "",
        email: ""
    });

    // const [userData, setUserData] = React.useState()


    // onChange={(e) => { setUserData({ ...user_data, email: e.target.value }) }}



    // setUserData({})
    console.log(userData)

    return (
        <>
            <button onClick={(e) => { setUserData({...userData, email:"lk"}) }}>
                changed
            </button>
            <h1>
                {
                    userData.name
                }
            </h1>
        </>
    )

}

export default Test;