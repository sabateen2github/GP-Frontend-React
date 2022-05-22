import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

const CardButton = (props) => {

    return (<Card sx={{width: 250, height: 350}}>
        <CardActionArea onClick={props.onClick} sx={{width: 1, height: 1}}>
            <CardMedia
                component="img"
                image={props.image}
                alt="green iguana"
                sx={{padding: 6}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.text}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>);
};

export {CardButton};