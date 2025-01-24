import Header from '../header/Header';
import Map from './Map';
import { Grid, Typography, Alert } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useState, useEffect } from 'react';
import Title from '../Title';
import ContactForm from './ContactForm';

const ContactUs = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('');
  const handleFormSubmit = (condition) => {
    if (condition) {
      setMessage('Message sent successfully');
      setSeverity('success');
    } else {
      setMessage('Message sent failed');
      setSeverity('error');
    }
    setFormSubmitted(true);
  };
  useEffect(() => {
    if (isFormSubmitted) {
      const timeout = setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [isFormSubmitted]);
  return (
    <>
      <Header />
      <Map />
      <Title title={'Contact Us'} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        mt="20px"
        style={{ marginBottom: '100px' }}
      >
        <Grid
          item
          xs={12}
          md={5}
          style={{
            paddingLeft: '10%',
            paddingRight: '20px',
            paddingBottom: '100px',
          }}
        >
          <Typography
            align="left"
            variant="h5"
            fontFamily="Arial"
            style={{
              color: 'rgb(14, 151, 255)',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '24px',
            }}
          >
            <strong>Contact us</strong>
          </Typography>
          <Typography
            align="left"
            variant="h5"
            fontFamily="Arial"
            style={{
              color: 'rgb(37, 45, 64)',
              fontSize: '32px',
              fontWeight: '700',
              lineHeight: '48px',
            }}
          >
            <strong>Have Questions?</strong>
          </Typography>
          <Typography
            align="left"
            variant="h5"
            fontFamily="Arial"
            style={{
              color: 'rgb(37, 45, 64)',
              fontSize: '32px',
              fontWeight: '700',
              lineHeight: '48px',
              marginBottom: '30px',
            }}
          >
            <strong>Get in touch.</strong>
          </Typography>
          <Typography className="mb-2" fontFamily="Arial">
            <LocationOnOutlinedIcon className="me-2" style={{ color: '#3AA8FF' }} />
            <strong>Location</strong>
          </Typography>
          <Typography className="mb-4" fontFamily="Arial" color="text.secondary">
            Rumi House, Old Airport Rd., Askari 10 Chaklala Cantt., Rawalpindi, Punjab 46000
          </Typography>
          <Typography className="mb-2" fontFamily="Arial">
            <EmailIcon className="me-3" style={{ color: '#3AA8FF' }} />
            <strong>Email</strong>
          </Typography>
          <Typography className="mb-4" fontFamily="Arial" color="text.secondary">
            info@fourbrothers.com.pk
          </Typography>
          <Typography className="mb-2" fontFamily="Arial">
            <PhoneIcon className="me-3" style={{ color: '#3AA8FF' }} />
            <strong>Phone</strong>
          </Typography>
          <Typography className="mb-4" fontFamily="Arial" color="text.secondary">
            +92 51 220 3122
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          style={{
            padding: '20px',
          }}
        >
          <ContactForm
            onFormSubmit={handleFormSubmit}
            boxShadow={true}
            location={'na'}
            area={'na'}
          />

          {/* <ContactForm onFormSubmit={handleFormSubmit} /> */}
        </Grid>
      </Grid>
      {isFormSubmitted && (
        <Alert
          severity={severity}
          role="presentation"
          sx={{
            width: {
              lg: '18%',
            },
            position: 'fixed',
            bottom: '5%',
            left: '2%',
            zIndex: 1,
            animation: 'fade-out 5s forwards',
          }}
        >
          {message}
        </Alert>
      )}
    </>
  );
};

export default ContactUs;
