import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Container,
  Alert,
  InputAdornment,
  IconButton,
  Link,
  Grid,
  Paper,
  Chip,
  Fade,
  alpha,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Person,
  TrendingUp,
  Security,
  Speed,
  GitHub,
  LinkedIn,
  Analytics,
} from '@mui/icons-material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useAlert } from '../contexts/AlertContext';
import * as authService from '../services/authService';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentFeature, setCurrentFeature] = useState(0);

  const navigate = useNavigate();
  const { login } = useAuth();
  const { showAlert } = useAlert();

  const features = [
    {
      icon: <Analytics sx={{ fontSize: 40, color: '#76ABAE' }} />,
      title: "Advanced Analytics",
      description: "Real-time insights into your financial data with interactive charts and comprehensive reporting"
    },
    {
      icon: <Security sx={{ fontSize: 40, color: '#76ABAE' }} />,
      title: "Bank-Level Security",
      description: "Your data is protected with enterprise-grade encryption and secure authentication protocols"
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: '#76ABAE' }} />,
      title: "Lightning Fast",
      description: "Optimized performance ensures quick access to your financial insights when you need them most"
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: '#76ABAE' }} />,
      title: "Smart Predictions",
      description: "AI-powered forecasting helps you make informed decisions about your financial future"
    }
  ];

  // Rotate features every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!formData.password) {
      setError('Password is required');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const fillDemoCredentials = () => {
    setFormData({
      name: 'Demo User',
      email: 'demo@loopr.com', 
      password: 'demo123',
      confirmPassword: 'demo123',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Register the user
      await authService.register(
        formData.email,
        formData.password,
        formData.name
      );
      
      // Auto-login after successful registration
      await login(formData.email, formData.password);
      
      showAlert('Registration successful! Welcome to FinLoopr!', 'success');
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0B0E11 0%, #1A1F2E 50%, #0B0E11 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(118, 171, 174, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(118, 171, 174, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: { xs: 2, md: 0 } }}>
        <Grid container sx={{ height: '100%', alignItems: 'center', justifyContent: 'center', maxWidth: '1400px' }} spacing={{ xs: 2, md: 4 }}>
          {/* Left Side - Feature Showcase */}
          <Grid 
            {...({ item: true, xs: 12, md: 6 } as any)}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: { xs: 3, md: 6 },
              position: 'relative',
              minHeight: { xs: 'auto', md: '100vh' },
              textAlign: 'center',
            }}
          >
            {/* Main Branding */}
            <Box sx={{ textAlign: 'center', mb: 6, width: '100%', maxWidth: 600, mx: 'auto' }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #76ABAE 0%, #FFFFFF 50%, #76ABAE 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                FinLoopr
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: alpha('#FFFFFF', 0.8),
                  fontWeight: 300,
                  letterSpacing: '0.5px',
                  mb: 4,
                }}
              >
                Advanced Financial Analytics Platform
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Chip label="Real-time Analytics" size="small" sx={{ bgcolor: alpha('#76ABAE', 0.2), color: '#76ABAE' }} />
                <Chip label="Secure" size="small" sx={{ bgcolor: alpha('#76ABAE', 0.2), color: '#76ABAE' }} />
                <Chip label="AI-Powered" size="small" sx={{ bgcolor: alpha('#76ABAE', 0.2), color: '#76ABAE' }} />
              </Box>
            </Box>

            {/* Rotating Feature Cards */}
            <Box sx={{ width: '100%', maxWidth: 500, position: 'relative', height: 280, mx: 'auto' }}>
              {features.map((feature, index) => (
                <Fade key={index} in={currentFeature === index} timeout={1000}>
                  <Paper
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      p: 4,
                      background: alpha('#FFFFFF', 0.05),
                      backdropFilter: 'blur(20px)',
                      border: `1px solid ${alpha('#76ABAE', 0.2)}`,
                      borderRadius: 3,
                      textAlign: 'center',
                      display: currentFeature === index ? 'block' : 'none',
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      {feature.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: '#FFFFFF',
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: alpha('#FFFFFF', 0.7),
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Paper>
                </Fade>
              ))}
            </Box>

            {/* Feature Indicators */}
            <Box sx={{ display: 'flex', gap: 1, mt: 4 }}>
              {features.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: currentFeature === index ? '#76ABAE' : alpha('#FFFFFF', 0.3),
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onClick={() => setCurrentFeature(index)}
                />
              ))}
            </Box>
          </Grid>

          {/* Right Side - Registration Form */}
          <Grid 
            {...({ item: true, xs: 12, md: 5 } as any)}
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: { xs: 3, md: 4 },
              minHeight: { xs: 'auto', md: '100vh' },
            }}
          >
            <Card 
              sx={{ 
                width: '100%',
                maxWidth: 450,
                mx: 'auto',
                my: 'auto',
                background: alpha('#FFFFFF', 0.08),
                backdropFilter: 'blur(20px)',
                border: `1px solid ${alpha('#FFFFFF', 0.1)}`,
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: '#FFFFFF',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    Create Account
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: alpha('#FFFFFF', 0.7),
                    }}
                  >
                    Join thousands of users managing their finances smarter
                  </Typography>
                </Box>

                {error && (
                  <Alert 
                    severity="error" 
                    sx={{ 
                      mb: 3,
                      bgcolor: alpha('#FF6B6B', 0.1),
                      border: `1px solid ${alpha('#FF6B6B', 0.3)}`,
                      borderRadius: 2,
                      '& .MuiAlert-message': {
                        color: '#FFFFFF',
                      }
                    }}
                  >
                    {error}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={formData.name}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person sx={{ color: '#76ABAE' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: alpha('#FFFFFF', 0.05),
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '& fieldset': {
                          borderColor: alpha('#FFFFFF', 0.2),
                        },
                        '&:hover fieldset': {
                          borderColor: alpha('#76ABAE', 0.5),
                          boxShadow: '0 0 0 2px rgba(118, 171, 174, 0.1)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#76ABAE',
                          boxShadow: '0 0 0 2px rgba(118, 171, 174, 0.2)',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: alpha('#FFFFFF', 0.7),
                        '&.Mui-focused': {
                          color: '#76ABAE',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: '#FFFFFF',
                      },
                    }}
                  />
                  
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email sx={{ color: '#76ABAE' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: alpha('#FFFFFF', 0.05),
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '& fieldset': {
                          borderColor: alpha('#FFFFFF', 0.2),
                        },
                        '&:hover fieldset': {
                          borderColor: alpha('#76ABAE', 0.5),
                          boxShadow: '0 0 0 2px rgba(118, 171, 174, 0.1)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#76ABAE',
                          boxShadow: '0 0 0 2px rgba(118, 171, 174, 0.2)',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: alpha('#FFFFFF', 0.7),
                        '&.Mui-focused': {
                          color: '#76ABAE',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: '#FFFFFF',
                      },
                    }}
                  />
                  
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: '#76ABAE' }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            sx={{ color: alpha('#FFFFFF', 0.7) }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: alpha('#FFFFFF', 0.05),
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '& fieldset': {
                          borderColor: alpha('#FFFFFF', 0.2),
                        },
                        '&:hover fieldset': {
                          borderColor: alpha('#76ABAE', 0.5),
                          boxShadow: '0 0 0 2px rgba(118, 171, 174, 0.1)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#76ABAE',
                          boxShadow: '0 0 0 2px rgba(118, 171, 174, 0.2)',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: alpha('#FFFFFF', 0.7),
                        '&.Mui-focused': {
                          color: '#76ABAE',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: '#FFFFFF',
                      },
                    }}
                  />

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: '#76ABAE' }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirm password visibility"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            edge="end"
                            sx={{ color: alpha('#FFFFFF', 0.7) }}
                          >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: alpha('#FFFFFF', 0.05),
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '& fieldset': {
                          borderColor: alpha('#FFFFFF', 0.2),
                        },
                        '&:hover fieldset': {
                          borderColor: alpha('#76ABAE', 0.5),
                          boxShadow: '0 0 0 2px rgba(118, 171, 174, 0.1)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#76ABAE',
                          boxShadow: '0 0 0 2px rgba(118, 171, 174, 0.2)',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: alpha('#FFFFFF', 0.7),
                        '&.Mui-focused': {
                          color: '#76ABAE',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: '#FFFFFF',
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={isLoading}
                    sx={{ 
                      mt: 3, 
                      mb: 2,
                      py: 1.5,
                      background: 'linear-gradient(45deg, #76ABAE, #5E898C)',
                      borderRadius: 2,
                      fontWeight: 600,
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #5E898C, #4A7073)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(118, 171, 174, 0.3)',
                      },
                      '&:disabled': {
                        background: alpha('#76ABAE', 0.3),
                        transform: 'none',
                      },
                    }}
                  >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>

                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={fillDemoCredentials}
                    sx={{ 
                      mb: 2,
                      py: 1.5,
                      borderColor: alpha('#76ABAE', 0.5),
                      color: '#76ABAE',
                      borderRadius: 2,
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#76ABAE',
                        background: alpha('#76ABAE', 0.1),
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    Fill Demo Credentials
                  </Button>

                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.5), mb: 2 }}>
                      Demo: demo@loopr.com / demo123
                    </Typography>
                    <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.7) }}>
                      Already have an account?{' '}
                      <Link 
                        component={RouterLink} 
                        to="/login" 
                        sx={{ 
                          color: '#76ABAE',
                          textDecoration: 'none',
                          fontWeight: 500,
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        Sign in here
                      </Link>
                    </Typography>
                  </Box>

                  {/* Social Footer */}
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: 2,
                    pt: 2,
                    borderTop: `1px solid ${alpha('#FFFFFF', 0.1)}`,
                  }}>
                    <IconButton
                      component="a"
                      href="https://github.com"
                      target="_blank"
                      sx={{ 
                        color: alpha('#FFFFFF', 0.5),
                        '&:hover': { 
                          color: '#76ABAE',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <GitHub />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://linkedin.com"
                      target="_blank"
                      sx={{ 
                        color: alpha('#FFFFFF', 0.5),
                        '&:hover': { 
                          color: '#76ABAE',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <LinkedIn />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RegisterPage;
