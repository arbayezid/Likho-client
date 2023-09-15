import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import { useState } from 'react';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ExportCards() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [cardData, setCardData] = useState([])
    useEffect(() => {
        fetch("exportPdf.json")
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])
    console.log(cardData)

    return (
        <div className='pb-12'>
            <div className='text-center  md:py-12 py-6'>
                <h1 className='md:text-3xl text-xl text-purple-500 ' >Need to quickly print out or email your documents? </h1>
                <p className='py-2 text-gray-500'>Convert them to the two most popular formats with a single click</p>
            </div>
            <div className='grid md:grid-cols-3 justify-center items-center gap-5 px-5'>
                {
                    cardData.map(item => <Card

                        key={item.id}
                        >
                        <CardMedia
                            component="img"
                            height="194"
                            image={item.img}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {item.desc}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                        </Collapse>
                    </Card>)
                }
            </div>
        </div>
    );
}



