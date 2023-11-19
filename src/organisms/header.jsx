import React from "react";

import Grid from "@mui/material/Unstable_Grid2";
import { Paper, IconButton } from "@mui/material";
import { AccountCircleOutlined, NotificationsNoneOutlined, SearchOutlined } from "@mui/icons-material";

const ICON_STYLES = { color: "#9CA3AF" };

function Header() {

    return (
        <Paper elevation={3}>
            <Grid container sx={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                <Grid container item>
                    <IconButton>
                        <SearchOutlined sx={ICON_STYLES} />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton>
                        <AccountCircleOutlined sx={ICON_STYLES} />
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneOutlined sx={ICON_STYLES} />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Header;