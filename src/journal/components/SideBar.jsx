import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem,
     ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";


const SideBar = ({drawerWidth =240}) => {
    return (
        <Box
        component='nav'
        sx={{width :{sm:drawerWidth}, flexShrink:{sm:0} }}
        >
            <Drawer
            variant='permanent'
            open
            sx={{
                display:{xs:'block'},
                '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}
            }}
            >

              <Toolbar variant='h6' nowrap="true" component='div'>
                <Typography>
                    Jorge Jorgeto
                </Typography>
             </Toolbar>    
             <Divider/>

             <List>
                {
                    ['Enero','Febero','Marzo','Abril'].map(text => (
                        <ListItem key ={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                   <ListItemText primary ={text}/>
                                   <ListItemText primary ={"lorem ipsium ips thj dfsjtr dsjftjh trhjt"}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
             </List>

            </Drawer>

        </Box>
    );
};

export default SideBar;