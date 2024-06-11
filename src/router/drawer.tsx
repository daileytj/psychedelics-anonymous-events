import React, { useState, useCallback } from 'react';
import { Button, createStyles, makeStyles, Typography } from '@material-ui/core';
import { useLocation, useNavigate } from 'react-router';
import { useDrawer } from '../contexts/drawerContextProvider';
import Menu from '@material-ui/icons/Menu';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerNavItem } from '@brightlayer-ui/react-components';
import { PAGES } from './routes';
import PAFAMLogo from '../assets/pafam-logo.png';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            backgroundColor: '#1E1E1E',
        },
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
            fontFamily: 'Sawton Circular',
        },
    })
);

export const NavigationDrawer: React.FC = () => {
    const { drawerOpen, setDrawerOpen } = useDrawer();
    // const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
                // title={'PA Fam'}
                // subtitle={'Community Site'}
                titleContent={
                    <img
                        src={PAFAMLogo}
                        alt={'PA Fam Logo'}
                        style={{ width: 160, marginLeft: '16px', padding: '16px 16px 16px 0px' }}
                    />
                }
                icon={<Menu />}
                onIconClick={(): void => {
                    setDrawerOpen(!drawerOpen);
                }}
                classes={{ root: classes.root, title: classes.title, subtitle: classes.subtitle }}
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
                                          setDrawerOpen(false);
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
                    style={{ width: '100%', height: 48, fontWeight: 200, letterSpacing: 2, color: '#F3F5F7' }}
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
