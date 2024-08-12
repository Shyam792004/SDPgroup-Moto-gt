import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import '../../assets/css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin@gmail.com') {
      navigate('/admin/dashboard');
    } else if(email=='user@gmail.com') {
      navigate('/userdashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div
          className="login-image"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          }}
        >
          <div className="login-image-overlay">
            <div>
              <h2 className="login-image-title"></h2>
              <p className="login-image-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                molestiae.
              </p>
            </div>
          </div>
        </div>

        <div className="login-form-container">
          <div className="login-form-content">
            <div className="login-logo">
              <img src="https://merakiui.com/images/logo.svg" alt="Logo" />
            </div>
            <p className="login-description">Sign in to access your account</p>

            <div className="login-card-container">
              <Card>
                <CardHeader className="login-card-header">
                  <CardTitle className="login-card-title">Login</CardTitle>
                  <CardDescription>
                    Enter your email below to login
                  </CardDescription>
                </CardHeader>
                <CardContent className="login-card-content">
                  <div className="login-input-container">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@example.com"
                      className="login-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="login-input-container">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Your Password"
                      className="login-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="login-button" onClick={handleLogin}>
                    Login
                  </Button>
                </CardFooter>
              </Card>

              <p className="login-signup">
                Don't have an account yet? <a href="register" className="login-signup-link">Sign up</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="https://merakiui.com/images/logo.svg" alt="Logo" />
          </div>
          <div className="footer-links">
            <a href="/" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About</a>
            <a href="/contact" className="footer-link">Contact</a>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
          </div>
          <div className="footer-social-media">
            <a href="https://facebook.com" className="footer-social-link">Facebook</a>
            <a href="https://twitter.com" className="footer-social-link">Twitter</a>
            <a href="https://instagram.com" className="footer-social-link">Instagram</a>
            <a href="https://linkedin.com" className="footer-social-link">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
