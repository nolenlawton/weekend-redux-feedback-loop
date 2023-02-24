function Support() {
    return(
        <div>
            <h2>How well are you being supported?</h2>
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

export default Support