'use client';

import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, IconButton } from '@mui/material';
import { Language } from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { locales } from '../../i18n';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();
  const locale = useLocale();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLocale: string) => {
    // 移除当前语言前缀，获取路径
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    // 构建新的路径
    const newPath = `/${newLocale}`;
    router.push(newPath);
    handleLanguageClose();
  };

  const getLocalizedPath = (path: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    return `/${locale}${path}`;
  };

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', color: 'text.primary' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          {t('navigation.brand')}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button 
            color="inherit" 
            onClick={() => router.push(getLocalizedPath('/'))}
          >
            {t('navigation.home')}
          </Button>
          <Button 
            color="inherit" 
            onClick={() => router.push(getLocalizedPath('/services'))}
          >
            {t('navigation.services')}
          </Button>
          <Button 
            color="inherit" 
            onClick={() => router.push(getLocalizedPath('/pricing'))}
          >
            {t('navigation.pricing')}
          </Button>
          {/* <Button 
            color="inherit" 
            onClick={() => router.push(getLocalizedPath('/contact'))}
          >
            {t('navigation.contact')}
          </Button> */}
          
          {/* Language Switcher */}
          <IconButton
            onClick={handleLanguageClick}
            sx={{ color: 'text.primary' }}
          >
            <Language />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleLanguageClose}
          >
            {locales.map((loc) => (
              <MenuItem 
                key={loc} 
                onClick={() => handleLanguageChange(loc)}
                selected={locale === loc}
              >
                {loc === 'zh' ? '中文' : 'English'}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
} 