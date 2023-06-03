const Addbatch = () => {
    return ( 
        <div>
            <form action=""> 
             <div>
                <input type="text" placeholder="batch number" required/>
                <input type="text" placeholder="machine name" required/>
                <input type="text" placeholder="operation" required/>
                <input type="number" placeholder="emp num" required />
                <input type="text" placeholder="emp name" required/>
                <input type="text" placeholder="emp img?" required />
                <input type="submit" value="next" />
             </div>
            </form>
            <div>
                <button>Submit</button>
            </div>
        </div>
     );
}
 
export default Addbatch;