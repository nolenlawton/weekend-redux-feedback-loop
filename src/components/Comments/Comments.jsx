function Comments() {
    return(
        <div>
            <h2>Any comments you want to leave?</h2>
            <input
                // onChange={handleFeeling}
                type='text'
                placeholder='-'
            />
            <button>Next</button>
        </div>
    )
}

export default Comments