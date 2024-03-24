import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, Collapse, IconButton, IconButtonProps, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandedMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  display: 'block',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  }),
}));

export default function ShiftCard() {
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      sx={{
        position: 'relative',
        top: '-8px',
        paddingBottom: '8px',
        minWidth: '300px',
        maxWidth: '500px'
      }}
    >
      <CardContent>
        <Typography
          variant='h6'
          component='div'
          sx={{
            position: 'relative',
            top: '-10px'
          }}
        >門番</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography color="text.secondary">講義棟門前</Typography>
          <ExpandedMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-label="show more"
            aria-expanded={expanded}
          >
            <ExpandMoreIcon />
          </ExpandedMore>
        </Box>
        <Collapse in={expanded}>
          <Typography>テスト</Typography>
          <CardActions>
            <Button size='small'>シフトマニュアルを見る</Button>
          </CardActions>
        </Collapse>
      </CardContent>
    </Card>
  )
}