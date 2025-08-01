'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  Stack,
  Chip
} from '@mui/material';
import { 
  Code, 
  Analytics, 
  Support
} from '@mui/icons-material';
import Navigation from '../../components/Navigation';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  const services = [
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: t('home.services.webDevelopment.title'),
      description: t('home.services.webDevelopment.description'),
      features: t.raw('home.services.webDevelopment.features')
    },
    {
      title: t('home.services.uiUxDesign.title'),
      description: t('home.services.uiUxDesign.description'),
      features: t.raw('home.services.uiUxDesign.features')
    },
    {
      icon: <Analytics sx={{ fontSize: 40 }} />,
      title: t('home.services.dataAnalytics.title'),
      description: t('home.services.dataAnalytics.description'),
      features: t.raw('home.services.dataAnalytics.features')
    },
    {
      icon: <Support sx={{ fontSize: 40 }} />,
      title: t('home.services.techConsulting.title'),
      description: t('home.services.techConsulting.description'),
      features: t.raw('home.services.techConsulting.features')
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <Navigation />
      
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 8
      }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                {t('home.hero.title')}
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom sx={{ opacity: 0.9 }}>
                {t('home.hero.subtitle')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, opacity: 0.8 }}>
                {t('home.hero.description')}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    backgroundColor: 'white', 
                    color: 'primary.main',
                    '&:hover': { backgroundColor: '#f5f5f5' }
                  }}
                >
                  {t('home.hero.viewServices')}
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    borderColor: 'white', 
                    color: 'white',
                    '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }
                  }}
                >
                  {t('home.hero.contactUs')}
                </Button>
              </Stack>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h1" sx={{ fontSize: '6rem' }}>
                👨‍💻
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          {t('home.services.title')}
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          {t('home.services.subtitle')}
        </Typography>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 4 
        }}>
          {services.map((service, index) => (
            <Card key={index} sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-4px)' }
            }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {service.icon}
                </Box>
                <Typography variant="h6" component="h3" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {service.description}
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
                  {service.features.map((feature: string, idx: number) => (
                    <Chip 
                      key={idx} 
                      label={feature} 
                      size="small" 
                      variant="outlined"
                      sx={{ fontSize: '0.75rem' }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* CTA Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 8
      }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              {t('home.cta.title')}
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              {t('home.cta.subtitle')}
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                backgroundColor: 'white', 
                color: 'primary.main',
                px: 4,
                py: 1.5,
                '&:hover': { backgroundColor: '#f5f5f5' }
              }}
            >
              {t('home.cta.button')}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 