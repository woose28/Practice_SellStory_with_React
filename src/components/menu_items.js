import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import '../css/index.css';

const useStyles = makeStyles((theme) => ({
  root : {
    width : '100%',
  },
  heading : {
    fontSize : theme.typography.pxToRem(10),
    flexBasis: '33.33%',
    flexShrink: 0,
    fontFamily : 'GmarketBold'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  tabs : {
    width : '100%',

  },
  tabItem : {
    fontFamily : 'GmarketBold',
    fontSize : '0.5rem',
  },
  tabTypo : {
    fontFamily : 'GmarketBold',
    fontSize : '0.5rem',
    textAlign : 'left',
    float : 'left',
    position : 'relative',
    left : '-40%'
  }
}));


export default function MenuItems(){
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return(
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          >
          <Typography className={classes.heading}>마이 페이지</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Tabs orientation="vertical" className={classes.tabs}>
            <Tab label={<Typography className={classes.tabTypo}>전자책 등록</Typography> } className={classes.tabItem}  href="./my_page"/>
          </Tabs>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          >
          <Typography className={classes.heading}>구매 관리</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Tabs orientation="vertical" className={classes.tabs}>
            <Tab label={<Typography className={classes.tabTypo}>구매한 전자책</Typography>} className={classes.tabItem} href="./purchase_management"/>
          </Tabs>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          >
          <Typography className={classes.heading}>판매 관리</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Tabs orientation="vertical" className={classes.tabs}>
            <Tab label={<Typography className={classes.tabTypo}>판매한 전자책</Typography>} className={classes.tabItem} href="./purchase_management"/>
          </Tabs>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
