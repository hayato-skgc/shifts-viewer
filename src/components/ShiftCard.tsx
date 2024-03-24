import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, CardActions, Collapse, IconButton, IconButtonProps, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";

export interface ShiftCardProps {
  title: string,
  locate: string,
  esaNumber: number
}

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

export default function ShiftCard(props: ShiftCardProps) {
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Paper
      elevation={2}
      sx={{
        minWidth: '240px',
        paddingX: 2,
        marginBottom: 1
      }}>
      <Typography
        variant='h6'
        component='div'
      >{ props.title }</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Typography color="text.secondary">{ props.locate }</Typography>
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
          <Button size='small' href={ `https://s-union.esa.io/posts/${props.esaNumber}` }>シフトマニュアルを見る</Button>
        </CardActions>
      </Collapse>
    </Paper>
  )
}