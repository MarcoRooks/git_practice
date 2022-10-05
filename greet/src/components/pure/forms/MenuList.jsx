import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {Home, Settings, AccessAlarm} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const getIcon = (icon) => {
    switch(icon){
        case 'HOME':
            return <Home/>
        case 'TASKS':
            return <Home/>
        case 'SETTINGS':
            return <Settings/>
        default: 
            return <Home/>
    }
}

function MenuList({list}) {
    const navigate = useNavigate()
    const navigation = (path) =>{
        navigate(path)
    }

    return (
        <List>
            {list.map(({text, path, icon}, index ) =>( 
                <ListItem key={index} button onClick={()=>navigation(path)}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText 
                    primary={text}
                    />
                </ListItem>
            ))}
        </List>
    );
}

export default MenuList;