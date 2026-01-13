import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ALL_SERVICES } from '../utils/constants';
import { FaCheckCircle, FaCalendar, FaClock, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

const Appointment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    terms: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.service) newErrors.service = 'Please select a service';
    } else if (currentStep === 2) {
      if (!formData.date) newErrors.date = 'Please select a date';
      if (!formData.time) newErrors.time = 'Please select a time';
    } else if (currentStep === 3) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
      if (!formData.terms) newErrors.terms = 'You must accept the terms';
    }
    return newErrors;
  };

  const nextStep = () => {
    const newErrors = validateStep(step);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStep(prev => Math.min(prev + 1, 4));
    setErrors({});
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateStep(3);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
      setSubmitStatus('success');
    }, 2000);
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div style={{ marginTop: '70px' }}>
      {/* Hero Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="display-4 fw-bold mb-3">Book an Appointment</h1>
            <p className="lead">Schedule your visit with us today</p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form */}
      <section ref={ref} className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Progress Steps */}
              <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center">
                  {[1, 2, 3, 4].map((s) => (
                    <div key={s} className="d-flex flex-column align-items-center flex-fill">
                      <div
                        className={`rounded-circle d-flex align-items-center justify-content-center ${
                          step >= s ? 'bg-primary text-white' : 'bg-light text-muted'
                        }`}
                        style={{ width: '50px', height: '50px', marginBottom: '10px' }}
                      >
                        {step > s ? <FaCheckCircle /> : s}
                      </div>
                      <span className="small text-center">
                        {s === 1 && 'Service'}
                        {s === 2 && 'Date & Time'}
                        {s === 3 && 'Details'}
                        {s === 4 && 'Confirm'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Steps */}
              <div className="card border-0 shadow-lg p-4">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="fw-bold mb-4">Select Service</h3>
                    <div className="mb-3">
                      <label htmlFor="service" className="form-label fw-semibold">
                        Choose a Service *
                      </label>
                      <select
                        className={`form-select ${errors.service ? 'is-invalid' : ''}`}
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        {ALL_SERVICES.map((service) => (
                          <option key={service.id} value={service.slug}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <div className="invalid-feedback">{errors.service}</div>
                      )}
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn btn-primary rounded-pill px-5"
                      >
                        Next
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="fw-bold mb-4">Select Date & Time</h3>
                    <div className="mb-4">
                      <label htmlFor="date" className="form-label fw-semibold">
                        <FaCalendar className="me-2" />
                        Select Date *
                      </label>
                      <input
                        type="date"
                        className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={getMinDate()}
                      />
                      {errors.date && (
                        <div className="invalid-feedback">{errors.date}</div>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        <FaClock className="me-2" />
                        Select Time *
                      </label>
                      <div className="row g-2">
                        {timeSlots.map((slot) => (
                          <div key={slot} className="col-6 col-md-3">
                            <button
                              type="button"
                              className={`btn w-100 ${
                                formData.time === slot
                                  ? 'btn-primary'
                                  : 'btn-outline-primary'
                              }`}
                              onClick={() => {
                                setFormData(prev => ({ ...prev, time: slot }));
                                if (errors.time) {
                                  setErrors(prev => ({ ...prev, time: '' }));
                                }
                              }}
                            >
                              {slot}
                            </button>
                          </div>
                        ))}
                      </div>
                      {errors.time && (
                        <div className="text-danger small mt-2">{errors.time}</div>
                      )}
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn btn-outline-secondary rounded-pill px-4"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn btn-primary rounded-pill px-5"
                      >
                        Next
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="fw-bold mb-4">Your Information</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <div className="col-md-6 mb-3 mb-md-0">
                          <label htmlFor="name" className="form-label fw-semibold">
                            <FaUser className="me-2" />
                            Full Name *
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                          />
                          {errors.name && (
                            <div className="invalid-feedback">{errors.name}</div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label fw-semibold">
                            <FaEnvelope className="me-2" />
                            Email *
                          </label>
                          <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                          />
                          {errors.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                          )}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label fw-semibold">
                          <FaPhone className="me-2" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                          <div className="invalid-feedback">{errors.phone}</div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label fw-semibold">
                          Additional Message (Optional)
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Any additional information..."
                        />
                      </div>
                      <div className="mb-4">
                        <div className="form-check">
                          <input
                            className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="terms">
                            I agree to the Terms & Conditions and Privacy Policy *
                          </label>
                          {errors.terms && (
                            <div className="invalid-feedback d-block">{errors.terms}</div>
                          )}
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="btn btn-outline-secondary rounded-pill px-4"
                        >
                          Previous
                        </button>
                        <motion.button
                          type="submit"
                          className="btn btn-primary rounded-pill px-5"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Appointment'}
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-5"
                  >
                    <FaCheckCircle size={80} className="text-success mb-4" />
                    <h2 className="fw-bold mb-3">Appointment Booked Successfully!</h2>
                    <p className="lead text-muted mb-4">
                      Your appointment has been confirmed. We'll send you a confirmation email shortly.
                    </p>
                    <div className="card bg-light p-4 mb-4 text-start">
                      <h5 className="fw-bold mb-3">Appointment Details</h5>
                      <p className="mb-2"><strong>Service:</strong> {ALL_SERVICES.find(s => s.slug === formData.service)?.name}</p>
                      <p className="mb-2"><strong>Date:</strong> {formData.date}</p>
                      <p className="mb-2"><strong>Time:</strong> {formData.time}</p>
                      <p className="mb-0"><strong>Name:</strong> {formData.name}</p>
                    </div>
                    <button
                      onClick={() => {
                        setStep(1);
                        setFormData({
                          service: '',
                          date: '',
                          time: '',
                          name: '',
                          email: '',
                          phone: '',
                          message: '',
                          terms: false
                        });
                        setSubmitStatus(null);
                      }}
                      className="btn btn-primary rounded-pill px-5"
                    >
                      Book Another Appointment
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;

