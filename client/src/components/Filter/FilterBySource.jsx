

const FilterBySource = ({onChange}) => {
    return (
        <div>
            <select onChange={onChange}>
                <option value="all">All</option>
                <option value="sourceApi">API</option>
                <option value="sourceDb">DB</option>
            </select>
        </div>
    )
};

export default FilterBySource;