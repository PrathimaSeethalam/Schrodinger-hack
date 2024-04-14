import classnames from 'classnames/bind';
import { Typography,Grid,styled,Paper ,FormControl ,OutlinedInput,InputAdornment,FormHelperText,InputLabel,IconButton} from '@mui/material';

import t from '../translations/en.json';

import styles from './Home.module.scss';

const cx = classnames.bind(styles);

/**
 * Home page component
 */

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Home() {
  return (
    <div className={cx('home-container')}>
       {/* <Typography variant="h2" fontWeight={700} color="primary">
        {t.home.welcomeTo}
        <br />
        {t.home.eventName}
      </Typography>

      <Typography variant="h6" component="span">
        {t.home.description}
      </Typography>  */}
       <Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
    <Item>
      {/* <img src = {"/images/food"}></img> */}
      {/* <img height="50%" src="/images/Food.jpeg" alt={'image'}></img> */}
{/* image="/images/R_0.svg" alt={'image'} */}

      aewsrdtfgyujikolsxdfgchbjmkzsxfdcgvhjbnkml,ASzdfxgcbh</Item>
  </Grid>
  <Grid item xs={8}>
    <Item> Sign Up
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">.com</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Username</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {/* {false ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
    </Item>
  </Grid>
</Grid>
    </div>
  );
}

export default Home;
