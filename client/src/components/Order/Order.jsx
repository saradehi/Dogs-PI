

const Order = ({onChange}) => {
    return (
        <div>
            <select onChange={onChange}>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
                <option value="min-weight">Min-weight</option>
                <option value="max-weight">Max-weight</option>
            </select>
        </div>
    )
}

export default Order;