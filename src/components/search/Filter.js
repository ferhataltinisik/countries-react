import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DropdownItem from "reactstrap";
import Dropdown from "reactstrap";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const regions = ["None", "Africa", "Asia", "America", "Europe", "Australia"];

function Filter() {
    let formControl="formControl";
    const classes = useStyles(formControl);
    const [continent, setContinent] = useState(regions[0]);
    const onChange = (e) => {
        setContinent(e.target.value);
    }

    const handleChange = (e) => {
        setContinent(e.target.value);
    };
    /*
   const handleChange = (e) => {
       listCountryReducer(e.target.value);
   };
*/

    return (
        <div>
            <FormControl variant="outlined" className={classes}>
                <InputLabel id="demo-simple-select-outlined-label">Filter Continent</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={continent}
                    onChange={handleChange}
                    label="Age"
                >
                    {regions.map(region => (
                        <MenuItem className="menuItem" value={region} key={region}>
                            {region}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <h1>Selected: {continent}</h1>

        </div>
    );
}

export default Filter;
