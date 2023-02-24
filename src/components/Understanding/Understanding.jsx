function Understanding() {
    return(
        <div>
            <h2>How well are you understanding the content?</h2>
            <input
                // onChange={handleFeeling}
                type='number'
                placeholder='-'
                min='1'
                max='5'
            />
            <button>Next</button>
        </div>
    )
}

export default Understanding