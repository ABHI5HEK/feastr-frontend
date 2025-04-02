import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Typography } from '@mui/material';
import { useState } from 'react';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import muiTheme from './theme'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import Bottom from './components/Menu/Bottom';
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
            height: '100vh',
          }}
        >
          {/* Top Header */}
          <AppBar position="sticky" sx={{ top: 0, left: 0, right: 0 }}>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60px', // Header height
                backgroundColor: muiTheme.palette.primary.main,
              }}
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#FFFFFF' }}>{CONSTANTS.TITLE}</Typography>
            </Box>
          </AppBar>

          {/* Main Content Area */}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: 'auto',
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: muiTheme.palette.background.default,
            }}
          >

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<SearchPage />} />
              <Route path="/map" element={<MapPage />} />
              {/* <Route path="/explore" element={<ExplorePage />} /> */}
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage/>} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/messages" element={<MessagesPage />} />
            </Routes>

            {/* Dynamic content based on Bottom Navigation selection
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            {`Page Test ${value + 1}`}
          </Typography> */}
          </Box>

          {/* Bottom Navigation */}
          <Box
            sx={{
              position: 'sticky',
              width: '100%',

              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1000, // Ensure it's above other content
              backgroundColor: muiTheme.palette.background.default,
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
              <BottomNavigationAction sx={{
                color: '#ffffff',
                '&.Mui-selected': {
                  color: '#2f4858',

                  // Set selected icon and label color
                },
                '&.MuiBottomNavigationAction-label': {
                  color: '#2f4858', // Set label color when not selected
                },
              }} label="Home" icon={<Home />}
                component={Link}
                to="/"
              />
              <BottomNavigationAction sx={{
                color: '#ffffff',
                '&.Mui-selected': {
                  color: '#2f4858', // Set selected icon and label color
                },
                '&.MuiBottomNavigationAction-label': {
                  color: '#2f4858', // Set label color when not selected
                },
              }} label="Map" icon={<PlaceOutlinedIcon />}
                component={Link}
                to="/map"
              />
              <BottomNavigationAction sx={{
                color: '#ffffff',
                '&.Mui-selected': {
                  color: '#2f4858', // Set selected icon and label color
                },
                '&.MuiBottomNavigationAction-label': {
                  color: '#2f4858', // Set label color when not selected
                },
              }} label="Explore" icon={<Search />}
                component={Link}
                to="/explore"
              />


              <BottomNavigationAction sx={{
                color: '#ffffff',
                '&.Mui-selected': {
                  color: '#2f4858', // Set selected icon and label color
                },
                '&.MuiBottomNavigationAction-label': {
                  color: '#2f4858', // Set label color when not selected
                },

              }} label="Leaderboard" icon={<LeaderboardOutlinedIcon />}
                component={Link}
                to="/leaderboard"
              />
              <BottomNavigationAction sx={{
                color: '#ffffff',
                '&.Mui-selected': {
                  color: '#2f4858', // Set selected icon and label color
                },
                '&.MuiBottomNavigationAction-label': {
                  color: '#2f4858', // Set label color when not selected
                },

              }} label="Profile" icon={<AccountCircle />}
                component={Link}
                to="/profile"
              />
            </BottomNavigation>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  )
}

export default App
