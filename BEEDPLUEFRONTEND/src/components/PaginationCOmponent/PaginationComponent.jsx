import "./PaginationComponent.scss"

const PaginationComponent = () => {
    return(
        <section className="pagination-component-container">
            <div className="pagination-component-div">
                <div className="pagination-component-page-number">
                   <p>
                       Page
                   </p>
                </div>
                <div className="pagination-component-buttons">
                    <div className="pagination-component-previous-button pagination-button">
                        <button>
                            Prev
                        </button>
                    </div>
                    <div className="pagination-component-next-button pagination-button">
                        <button>
                            Next
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default PaginationComponent