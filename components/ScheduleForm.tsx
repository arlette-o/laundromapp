"use client";
import Link from "next/link";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";

import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import GradeIcon from "@mui/icons-material/Grade";
import PhoneIcon from "@mui/icons-material/Phone";

export default function ScheduleForm() {
  return (
    <Grid container spacing={2} width={"60%"}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="First Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Last Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          fullWidth
          label="Phone"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={7}>
        <TextField
          fullWidth
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid item xs={3}>
          <DatePicker disablePast label="Pickup Day" />
        </Grid>
        <Grid item xs={3}>
          <TimePicker
            label="Pickup Time"
            timeSteps={{ minutes: 15 }}
            shouldDisableTime={(time, _view) => {
              const hour = time.hour();
              return hour >= 21 || hour < 7;
            }}
          />
        </Grid>
      </LocalizationProvider>
      <Grid item xs={6}>
        {" "}
        <TextField
          fullWidth
          label="Special Request"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GradeIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={10}>
        <FormGroup>
          <FormControlLabel
            required
            control={<Checkbox />}
            label={
              <>
                <span>
                  I have read and accept the{" "}
                  <Link href="delivery/terms">Terms & Conditions</Link>
                </span>
              </>
            }
          />
        </FormGroup>
      </Grid>
      <Grid item xs={2}>
        <Button fullWidth variant="contained">
          Schedule
        </Button>
      </Grid>
    </Grid>
  );
}