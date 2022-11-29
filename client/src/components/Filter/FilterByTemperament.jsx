

const FilterbyTemperament = ({onChange, temperament}) => {


    return(
        <div>
            <select onChange={onChange} > 
                <option value="all_temperaments">All temperaments</option>
                {
                    temperament?.map(ele => {
                        return (
                            <option value={ele.name} key={ele.id}>{ele.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
};

export default FilterbyTemperament;