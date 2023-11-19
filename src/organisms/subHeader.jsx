import React from "react";

import Container from "@mui/material/Container"
import { Box} from "@mui/material"

function SubHeader() {
    return (
        <Box style ={{display:"flex", justifyContent:"flex-end"}}>
            <Container>
            <h1>Champions League</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam numquam similique fugiat quia mollitia maxime</p>
            </Container>
        </Box>
    );
}

export default SubHeader;