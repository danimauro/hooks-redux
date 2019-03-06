import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import './estilos.css';

function Autocomplete(props){

    const [ isOpen, setIsOpen  ] = useState(false);

    const {
        suggestions,
        onChangeText,
        onChangeSelection,
        text,
    } = props;

    return (
        <div className="main-container">
            <div className="container-icon">
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Buscar…"
                value={text}
                style={{ width: '100%' }}
                onChange={(event) => {
                    const newText = event.target.value;
                    
                    onChangeText(newText);
                    
                    if (!isOpen && newText) {
                        setIsOpen(true);
                    } else if (isOpen && !newText) {
                        setIsOpen(false);
                    }
                }}
                onBlur={() => {
                    setTimeout(() => setIsOpen(false), 100);
                }}
                onFocus={() => {
                    if (text) {
                        setIsOpen(true);
                    }
                }}
                onKeyPress={(event) => {
                    if (event.key === 'Enter' && text) {
                        onChangeSelection(text);
                    }
                }}
            />
            {isOpen &&
            <Paper className="container-results" square>
                { suggestions.map(suggestion =>
                <MenuItem
                    key={suggestion.id}
                    component="div"
                    onClick={() => {
                        onChangeSelection(suggestion.title);
                        setIsOpen(false);
                    }}
                >
                    {suggestion.title}
                </MenuItem>)}
            </Paper>}
        </div>
    );
}

export default Autocomplete;