

const FilterBySource = () => {
    return (
        <div>
            <select name="source filter">
                <option value="sourceApi">API</option>
                <option value="sourceDb">DB</option>
            </select>
        </div>
    )
};

export default FilterBySource;