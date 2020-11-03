const BoxForm = props => {
    const {inputs, handleForm, handleSubmit} = props; 
    return (
        <form onSubmit = {handleSubmit} className="col-5 mx-auto">
            <div className="form-group">
                <h1>Add a Color</h1>
            
                <input 
                type="text" 
                name="backgroundColor"  
                className="form-control"
                value={inputs.backgroundColor}
                onChange={handleForm}
                />
                <input type="submit" value= "Add" className="submit btn btn-warning btn-outline-dark"/>
                
            </div>
            
        </form>


    );
}

export default BoxForm;