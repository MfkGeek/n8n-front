'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip
} from '@mui/material';
import { 
  Check,
  Star
} from '@mui/icons-material';
import Navigation from '../../../components/Navigation';
import { useTranslations } from 'next-intl';

export default function Pricing() {
  const t = useTranslations();

  const pricingPlans = [
    {
      name: t('pricing.basic.name'),
      price: t('pricing.basic.price'),
      period: t('pricing.basic.period'),
      description: t('pricing.basic.description'),
      features: t.raw('pricing.basic.features'),
      popular: false,
      color: '#1976d2'
    },
    {
      name: t('pricing.professional.name'),
      price: t('pricing.professional.price'),
      period: t('pricing.professional.period'),
      description: t('pricing.professional.description'),
      features: t.raw('pricing.professional.features'),
      popular: true,
      color: '#dc004e'
    },
    {
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      period: t('pricing.enterprise.period'),
      description: t('pricing.enterprise.description'),
      features: t.raw('pricing.enterprise.features'),
      popular: false,
      color: '#2e7d32'
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
              {t('pricing.hero.title')}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9 }}>
              {t('pricing.hero.subtitle')}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Pricing Plans */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          {t('pricing.section.title')}
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          {t('pricing.section.subtitle')}
        </Typography>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
          justifyContent: 'center'
        }}>
          {pricingPlans.map((plan, index) => (
            <Card key={index} sx={{ 
              height: '100%',
              position: 'relative',
              transform: plan.popular ? 'scale(1.05)' : 'none',
              transition: 'transform 0.2s',
              '&:hover': { transform: plan.popular ? 'scale(1.05)' : 'scale(1.02)' }
            }}>
              {plan.popular && (
                <Chip
                  icon={<Star />}
                  label={t('pricing.popular')}
                  sx={{
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: plan.color,
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                />
              )}
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {plan.name}
                </Typography>
                <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', color: plan.color }}>
                  {plan.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {plan.period}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  {plan.description}
                </Typography>
                
                <List sx={{ textAlign: 'left' }}>
                  {plan.features.map((feature: string, idx: number) => (
                    <ListItem key={idx} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Check sx={{ color: plan.color }} />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions sx={{ p: 4, pt: 0 }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  size="large"
                  sx={{ 
                    backgroundColor: plan.color,
                    '&:hover': { backgroundColor: plan.color, opacity: 0.9 }
                  }}
                >
                  {t('pricing.selectPlan')}
                </Button>
              </CardActions>
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
              {t('pricing.cta.title')}
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              {t('pricing.cta.subtitle')}
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
              {t('pricing.cta.button')}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 