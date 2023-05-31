const Signup = () => {
    return ( 
    <div>
         <form action="" className="signup">
          <input type="email" placeholder="enter mail id" required /><br />
            <input type="text" placeholder="enter emp name" required/><br />
            <input type="text" placeholder="enter empid" required /><br />
            <input type="tel" placeholder="enter ph number" required/><br />
            <input type="text" placeholder="enter unit" required /><br />
            <input type="text" placeholder="designation" required/><br />
            <input type="text" placeholder="department" required /><br />
            <input type="password" placeholder="enter password" /><br />
            <input type="number" placeholder="re enter password" /><br />
            <input type="submit" value="Signup" />
         </form>
    </div>
     )
}
 
export default Signup;