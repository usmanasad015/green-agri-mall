/* eslint-disable react/prop-types */
import { FormControl, FormLabel, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
  formControl: {
    border: '1px solid rgb(216, 216, 216)',
    borderRadius: '6px',
    padding: '7px 10px',
    color: 'rgb(102, 116, 136)',
    fontSize: '14px',
    fontWeight: '400',
    height: '50px',
    lineHeight: '21px',
    marginBottom: '20px',
    fontFamily: 'Arial',
  },
  formLabel: {
    color: 'rgb(37, 45, 64)',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '18px',
    marginBottom: '10px',
    fontFamily: 'Arial',
  },
  redSpan: {
    color: 'red',
  },
  captchaClass: {
    transform: 'scale(0.7)',
    transformOrigin: '0 0',
    '@media (min-width: 960px)': {
      transform: 'scale(0.75)',
    },
    '@media (min-width: 1280px)': {
      transform: 'scale(1)',
    },
  },
});
export default function ContactForm({ location, area, onFormSubmit, boxShadow }) {
  const BASE_URL = 'https://limspakistan.com/admin/api';
  const END_POINT = '/contactUs';
  const capSiteKey = '6LcU3lgoAAAAANQJflu8EL_EmVZWGIoZirN67Ag2';
  const classes = useStyles();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [myMessage, setMyMessage] = useState('');
  const [myCaptcha, setMyCaptcha] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const nameRegex = /^[a-zA-Z\s]+$/;
  const mobileRegex = /^\d{11}$/;
  const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  useEffect(() => {
    setIsVerified(name && mobile && email && myMessage && myCaptcha);
  }, [name, mobile, email, myMessage, myCaptcha]);
  const validateFields = () => {
    if (!nameRegex.test(name)) {
      return false;
    }
    if (!mobileRegex.test(mobile)) {
      return false;
    }
    if (!emailRegex.test(email)) {
      return false;
    }
    if (!myMessage || myMessage.trim() === '') {
      return false;
    }
    return true;
  };
  const handleSendMessage = () => {
    setMyCaptcha(false);
    if (!validateFields()) {
      return;
    }

    const formData = new FormData();
    formData.append('location', location);
    formData.append('area', area);
    formData.append('name', name);
    formData.append('mobile', mobile);
    formData.append('email', email);
    formData.append('myMessage', myMessage);
    axios
      .post(BASE_URL + END_POINT, formData)
      .then((response) => {
        console.log(response);
        window.grecaptcha.reset();
        setMyCaptcha(false);
        resetFormFields();
        onFormSubmit(true);
      })
      .catch((error) => {
        console.log(error)
        Object.keys(error.response.data.details).forEach(key=>{
          error.response.data.details[key].forEach(errorMessage => {
            enqueueSnackbar([key] + " : " + errorMessage, { variant: 'error' });
              console.log([key], " 0", key, " ", errorMessage, { variant: 'error' });
            });
        });

        console.log(error);
        onFormSubmit(false);
      });
  };
  const resetFormFields = () => {
    setName('');
    setMobile('');
    setEmail('');
    setMyMessage('');
    setMyCaptcha(false);
  };
  return (
    <FormControl
      style={{
        borderRadius: '15px',
        boxShadow: boxShadow ? 'rgba(0, 0, 0, 0.1) 0px 8px 8px' : 'none',
        width: '100%',
        padding: '50px',
      }}
    >
      <FormLabel className={classes.formLabel}>
        <strong>
          Your name<span className={classes.redSpan}>*</span>
        </strong>
      </FormLabel>
      <input
        placeholder="Name"
        className={`${classes.formControl} ${!nameRegex.test(name) ? classes.redSpan : ''}`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormLabel className={classes.formLabel}>
        <strong>
          Mobile or Phone Number<span className={classes.redSpan}>*</span>
        </strong>
      </FormLabel>
      <input
        type="number"
        placeholder="03xxxxxxxxx"
        className={`${classes.formControl} ${!mobileRegex.test(mobile) ? classes.redSpan : ''}`}
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <FormLabel className={classes.formLabel}>
        <strong>
          Email Address<span className={classes.redSpan}>*</span>
        </strong>
      </FormLabel>
      <input
        placeholder="john@gmail.com"
        className={`${classes.formControl} ${!emailRegex.test(email) ? classes.redSpan : ''}`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormLabel className={classes.formLabel}>
        <strong>
          Your Query or Message<span className={classes.redSpan}>*</span>
        </strong>
      </FormLabel>
      <textarea
        className={classes.formControl}
        value={myMessage}
        onChange={(e) => setMyMessage(e.target.value)}
        style={{
          height: '150px',
          resize: 'none',
        }}
      />
      <div className={classes.captchaClass}>
        <ReCAPTCHA sitekey={capSiteKey} onChange={() => setMyCaptcha(true)} />
      </div>
      <Button
        disabled={!isVerified}
        onClick={handleSendMessage}
        style={{
          color: 'white',
          backgroundColor: isVerified ? 'rgb(14, 151, 255)' : 'rgb(171, 193, 209)',
          padding: '13px 15px',
          marginTop: '20px',
          width: '180px',
          height: '40px',
        }}
      >
        Send Message
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="10"
          viewBox="0 0 24 10"
          fill="none"
          style={{ paddingLeft: '10px' }}
        >
          <path
            d="M23.4133 3.6066L20.8333 0.999933C20.7714 0.937448 20.6976 0.887851 20.6164 0.854006C20.5351 0.82016 20.448 0.802734 20.36 0.802734C20.272 0.802734 20.1849 0.82016 20.1036 0.854006C20.0224 0.887851 19.9486 0.937448 19.8867 0.999933C19.7625 1.12484 19.6928 1.29381 19.6928 1.46993C19.6928 1.64606 19.7625 1.81502 19.8867 1.93993L22.26 4.33327H0.666667C0.489856 4.33327 0.320286 4.40351 0.195262 4.52853C0.0702377 4.65355 0 4.82312 0 4.99993C0 5.17674 0.0702377 5.34631 0.195262 5.47134C0.320286 5.59636 0.489856 5.6666 0.666667 5.6666H22.3L19.8867 8.07327C19.8242 8.13524 19.7746 8.20898 19.7407 8.29022C19.7069 8.37146 19.6895 8.45859 19.6895 8.5466C19.6895 8.63461 19.7069 8.72175 19.7407 8.80299C19.7746 8.88422 19.8242 8.95796 19.8867 9.01993C19.9486 9.08242 20.0224 9.13202 20.1036 9.16586C20.1849 9.19971 20.272 9.21713 20.36 9.21713C20.448 9.21713 20.5351 9.19971 20.6164 9.16586C20.6976 9.13202 20.7714 9.08242 20.8333 9.01993L23.4133 6.43327C23.7879 6.05827 23.9982 5.54994 23.9982 5.01993C23.9982 4.48993 23.7879 3.9816 23.4133 3.6066Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </Button>
    </FormControl>
  );
}
