const Pagination = ({prevPage,handleNext,handlePrev}) => {

    return (
        <>
            <center>
                <h3>{prevPage.content}</h3>
                <div className="flex justify-between w-20">
                    <button className="btn btn-secondary mx-1" onClick={handlePrev}> prev</button>
                    <button className="btn btn-secondary mx-1" onClick={handleNext}>next</button>
                </div>
            </center>
        </>
    )
}
export default Pagination;