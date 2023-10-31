import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import "dotenv/config";
import { useTranslation } from 'next-i18next';

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const { t } = useTranslation();
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const alertSuccess = () => {
    MySwal.fire({
      title: t('forms.successTitle'),
      text: t('forms.successMessage'),
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  const alertError = () => {
    MySwal.fire({
      title: t('forms.errorTitle'),
      text: t('forms.errorMessage'),
      icon: "error",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/items/contact_form`, payload);
      setContact(INITIAL_STATE);
      alertSuccess();
    } catch (error) {
      alertError()
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t('forms.name')}
                className="form-control"
                value={contact.name}
                onChange={handleChange}
                required
                style={{border: 1}}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder={t('forms.email')}
                className="form-control"
                value={contact.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="number"
                placeholder={t('forms.phone')}
                className="form-control"
                value={contact.number}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder={t('forms.subject')}
                className="form-control"
                value={contact.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="text"
                cols="30"
                rows="6"
                placeholder={t('forms.message')}
                className="form-control"
                value={contact.text}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12" style={{justifyContent: 'center', display: 'flex'}}>
            <button type="submit" className="btn btn-primary" >
              {t('utils.submit')}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
