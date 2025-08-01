'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent,
  Button,
  Stack,
  Chip
} from '@mui/material';
import { 
  Code, 
  Analytics, 
  Support,
  ArrowForward
} from '@mui/icons-material';
import Navigation from '../../../components/Navigation';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations();

  const services = [
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: t('services.webDevelopment.title'),
      description: t('services.webDevelopment.description'),
      features: t.raw('services.webDevelopment.features'),
      color: '#1976d2'
    },
    {
      title: t('services.uiUxDesign.title'),
      description: t('services.uiUxDesign.description'),
      features: t.raw('services.uiUxDesign.features'),
      color: '#dc004e'
    },
    {
      icon: <Analytics sx={{ fontSize: 40 }} />,
      title: t('services.dataAnalytics.title'),
      description: t('services.dataAnalytics.description'),
      features: t.raw('services.dataAnalytics.features'),
      color: '#2e7d32'
    },
    {
      icon: <Support sx={{ fontSize: 40 }} />,
      title: t('services.techConsulting.title'),
      description: t('services.techConsulting.description'),
      features: t.raw('services.techConsulting.features'),
      color: '#ed6c02'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <Navigation />
      
      {/* Header */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 8
      }}>
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              {t('services.hero.title')}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9 }}>
              {t('services.hero.subtitle')}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          {t('services.section.title')}
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          {t('services.section.subtitle')}
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {services.map((service, index) => (
            <Card key={index} sx={{ 
              p: 4,
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-4px)' }
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box sx={{ color: service.color }}>
                  {service.icon}
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {service.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
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
                </Box>
                <Button 
                  variant="contained" 
                  endIcon={<ArrowForward />}
                  sx={{ 
                    backgroundColor: service.color,
                    '&:hover': { backgroundColor: service.color, opacity: 0.9 }
                  }}
                >
                  {t('services.learnMore')}
                </Button>
              </Box>
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
              {t('services.cta.title')}
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              {t('services.cta.subtitle')}
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
              {t('services.cta.button')}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 