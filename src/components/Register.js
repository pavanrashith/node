export default function Register()
{
return (
    <>
    <div className="row">
            <div className="one-fourth"></div>
            <div className="box one-half">
                <div className="form login">
                <form action="">
                    <h4 className="text-center header">Signup Form</h4>
                    <div className="field input">
                        <label for="">First Name</label>
                        <input type="text" name="first_name" placeholder="first name" />
                    </div>
                    <div className="field input">
                        <label for="">Last Name</label>
                        <input type="text" name="last_name" placeholder="Last Name" />
                    </div>
                    <div className="field input">
                        <label for="">ID</label>
                        <input type="text" name="id" placeholder="ID" />
                    </div>
                    <div className="field input">
                        <label for="">Confirm Password</label>
                        <input type="password" name="username" placeholder="*****" />
                    </div>
                    <div className="field input">
                        <label for="">Contact Information</label>
                        <input type="text" name="contact" id="" placeholder="+1999999999" />

                    </div>
                    <div className="field button">
                    <a className="button" href="./Student_profile">Login</a>
                        
                    </div>
                </form>
                </div>
            </div>
            <div></div>
        </div>
        <div></div>
  
    </>
)
}