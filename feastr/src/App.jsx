import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import muiTheme from './theme';
import TelegramIcon from '@mui/icons-material/Telegram';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Box, AppBar, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Search, AccountCircle } from '@mui/icons-material';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import { CONSTANTS } from './constants';
import MapPage from './pages/MapPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ProfilePage from './pages/ProfilePage';
import NotificationsPage from './pages/NotificationsPage';
import MessagesPage from './pages/MessagesPage';
import SearchPage from './pages/SearchPage';
import SettingsPage from './pages/SettingsPage';


function App() {
  const [value, setValue] = useState(0);

  return (
    <Router>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh', // Full screen height
          }}
        >
          {/* Top Header */}
          <AppBar position="sticky" sx={{ top: 0, left: 0, right: 0 }}>
            <Box
              sx={{
                display: 'flex',
                padding:'5px 10px',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '60px', // Header height
                backgroundColor: muiTheme.palette.primary.main,
              }}
            >
              <Box display='flex'>
                <Box
                component='img'
                src='./public/favicon.png'
                width='1.5rem'
                height='1.5rem'
                >

                </Box>
                
              <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#FFFFFF' }}
              
              >
                {CONSTANTS.TITLE}
              </Typography>
              </Box>
              <IconButton sx={{
                color:'#FFFFFF'
              }}>
                <TelegramIcon ></TelegramIcon>
              </IconButton>
            </Box>
          </AppBar>

          {/* Main Content Area */}
          <Box
            sx={{
              flexGrow: 1, // Allow the content area to grow and take up available space
              overflowY: 'auto', // Enable vertical scrolling
              padding: 2,
              backgroundColor: muiTheme.palette.background.default,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<SearchPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/messages" element={<MessagesPage />} />
            </Routes>
          </Box>

          {/* Bottom Navigation */}
          <Box
            sx={{
              position: 'sticky',
              bottom: 0,
              width: '100%',
              backgroundColor: muiTheme.palette.background.default,
              zIndex: 1000, // Keep it above content
            }}
          >
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => setValue(newValue)}
              showLabels
              sx={{
                backgroundColor: muiTheme.palette.primary.main,
                color: muiTheme.palette.primary.light,
                borderRadius: '25px 25px 0px 0px',
              }}
            >
              <BottomNavigationAction
                sx={{
                  color: '#ffffff',
                  '&.Mui-selected': {
                    color: '#2f4858', // Selected color
                  },
                  '&.MuiBottomNavigationAction-label': {
                    color: '#2f4858', // Label color
                  },
                }}
                label="Home"
                icon={<Home />}
                component={Link}
                to="/"
              />
              <BottomNavigationAction
                sx={{
                  color: '#ffffff',
                  '&.Mui-selected': {
                    color: '#2f4858',
                  },
                  '&.MuiBottomNavigationAction-label': {
                    color: '#2f4858',
                  },
                }}
                label="Map"
                icon={<PlaceOutlinedIcon />}
                component={Link}
                to="/map"
              />
              <BottomNavigationAction
                sx={{
                  color: '#ffffff',
                  '&.Mui-selected': {
                    color: '#2f4858',
                  },
                  '&.MuiBottomNavigationAction-label': {
                    color: '#2f4858',
                  },
                }}
                label="Explore"
                icon={<Search />}
                component={Link}
                to="/explore"
              />
              <BottomNavigationAction
                sx={{
                  color: '#ffffff',
                  '&.Mui-selected': {
                    color: '#2f4858',
                  },
                  '&.MuiBottomNavigationAction-label': {
                    color: '#2f4858',
                  },
                }}
                label="Leaderboard"
                icon={<LeaderboardOutlinedIcon />}
                component={Link}
                to="/leaderboard"
              />
              <BottomNavigationAction
                sx={{
                  color: '#ffffff',
                  '&.Mui-selected': {
                    color: '#2f4858',
                  },
                  '&.MuiBottomNavigationAction-label': {
                    color: '#2f4858',
                  },
                }}
                label="Profile"
                icon={<AccountCircle />}
                component={Link}
                to="/profile"
              />
            </BottomNavigation>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
