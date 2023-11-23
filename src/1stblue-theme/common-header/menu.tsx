import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import { MENU_ITEMS, NavbarItemType } from './constants';
import { GithubStarIcon, GithubIcon, DiscordIcon, TwitterIcon } from '../icons/popover';
import { MenuItem } from './menu-item';
import { NavbarItem } from './navbar-item';
import { NavbarPopoverItem } from './navbar-popover-item';

export const Menu: React.FC = () => {
  return (
    <>
      {MENU_ITEMS.map(item => {
        if (item.isPopover) {
          return (
            <NavbarPopoverItem key={`navbar-${item.label}`} item={item}>
              <>
                <div
                  className={clsx('grid grid-cols-2 gap-4', 'p-4', 'w-[672px]', 'dark:bg-gray-900 bg-white')}
                >
                  {item.items.map(subItem => (
                    <MenuItem key={subItem.label} item={subItem} />
                  ))}
                </div>
              </>
            </NavbarPopoverItem>
          );
        }

        return <NavbarItem key={`navbar-${item.label}`} item={item as NavbarItemType} />;
      })}
    </>
  );
};

