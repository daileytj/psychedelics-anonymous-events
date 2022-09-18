import React, { useState, useCallback } from 'react';
import { Button, createStyles, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { useLocation, useNavigate } from 'react-router';
import { useDrawer } from '../contexts/drawerContextProvider';
import Menu from '@material-ui/icons/Menu';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerNavItem } from '@brightlayer-ui/react-components';
import { PAGES } from './routes';

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            fontWeight: 500,
            letterSpacing: '5px',
            textTransform: 'uppercase',
        },
        subtitle: {
            fontWeight: 200,
            letterSpacing: '5px',
            textTransform: 'uppercase',
        },
        navItemTitle: {
            fontWeight: 400,
            letterSpacing: '2px',
            textTransform: 'uppercase',
        },
    })
);

export const NavigationDrawer: React.FC = () => {
    const { drawerOpen, setDrawerOpen } = useDrawer();
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [selected, setSelected] = useState(location.pathname);
    const classes = useStyles();

    const history = useCallback(
        (id: string): void => {
            navigate(id);
            setSelected(id);
        },
        [navigate, setSelected]
    );

    return (
        <Drawer
            open={drawerOpen}
            ModalProps={{
                onClose: (): void => {
                    setDrawerOpen(false);
                },
            }}
            variant={'temporary'}
            activeItem={selected}
            width={'20.75rem'}
        >
            <DrawerHeader
                title={'PA Fam'}
                subtitle={'Community Site'}
                icon={<Menu />}
                onIconClick={(): void => {
                    setDrawerOpen(!drawerOpen);
                }}
                classes={{ title: classes.title, subtitle: classes.subtitle }}
            />
            <DrawerBody>
                {PAGES.map((page) => {
                    const Icon = page.icon;
                    return (
                        <DrawerNavItem
                            title={page.title}
                            itemID={page.route || ''}
                            key={page.title}
                            icon={<Icon />}
                            onClick={
                                page.route
                                    ? (): void => {
                                          history(page.route);
                                          if (isMobile) setDrawerOpen(false);
                                      }
                                    : undefined
                            }
                            classes={{ title: classes.navItemTitle }}
                        />
                    );
                })}
            </DrawerBody>
            <DrawerFooter divider={false}>
                <Button
                    color={'primary'}
                    style={{ width: '100%', height: 48, fontWeight: 200, letterSpacing: 2 }}
                    target="_blank"
                    href={'https://twitter.com/daileytj'}
                >
                    <Typography color={'secondary'} style={{ fontWeight: 200, letterSpacing: 2, marginRight: 4 }}>
                        /
                    </Typography>
                    built and maintained by @daileytj
                </Button>
            </DrawerFooter>
        </Drawer>
    );
};
