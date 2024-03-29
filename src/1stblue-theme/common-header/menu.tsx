import React from 'react';
import clsx from 'clsx';

import { MENU_ITEMS, NavbarItemType } from './constants';
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
              {!item?.split ? (
                <div className={clsx('grid grid-cols-2 gap-4', 'p-4', 'w-[672px]', ' bg-white')}>
                  {item.items.map(subItem => (
                    <MenuItem key={subItem.label} item={subItem} />
                  ))}
                </div>
              ) : (
                <div className={clsx('grid gap-4', 'p-4', 'w-[336px]', ' bg-white')}>
                  {item.items.map(subItem => (
                    <MenuItem key={subItem.label} item={subItem} />
                  ))}
                </div>
              )}
            </NavbarPopoverItem>
          );
        }
        return <NavbarItem key={`navbar-${item.label}`} item={item as NavbarItemType} />;
      })}
    </>
  );
};

