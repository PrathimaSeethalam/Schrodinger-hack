import React from 'react';
import classnames from 'classnames/bind';
import { styled } from '@mui/material/styles';
import { Typography,TableContainer, Paper,Table, TableHead ,TableRow , TableCell,  tableCellClasses, TableBody  } from '@mui/material';
import styles from '../home/Home.module.scss';

const cx = classnames.bind(styles);

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData(<img src="/images/R_1.svg" alt={'image'}></img>, 159, 6.0, 24, 4.0),
    createData(<img src="/images/core_0.svg" alt={'image'}></img>, 237, 9.0, 37, 4.3),
    createData(<img src="/images/core_1.svg" alt={'image'}></img>, 262, 16.0, 24, 6.0),
    createData(<img src="/images/core_7.svg" alt={'image'}></img>, 305, 3.7, 67, 4.3),
    createData(<img src="/images/R_1.svg" alt={'image'}></img>, 356, 16.0, 49, 3.9),
  ];
  
const Generator = () => {
    return (
        <div className={cx('home-container')}>
        <Typography variant="h2" fontWeight={700} color="primary">
         {"Generator Molecules"}
          <br />
        
        </Typography>
  
        <Typography variant="h6" component="span">
         
        </Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Molecule Names (CCNH1)</StyledTableCell>
            <StyledTableCell align="right">Availability</StyledTableCell>
            <StyledTableCell align="right">Solubility&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Synthesizable&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Transparency&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    );
};

export default Generator;