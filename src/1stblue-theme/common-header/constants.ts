// import { CloudIcon } from "../icons/cloud";
import { HackathonAltIcon } from '../icons/hackathon-alt';
import {
  DocumentsIcon,
  ConnectorsIcon,
  TutorialIcon,
  ExamplesIcon,
  AwesomeIcon,
  // UseCasesIcon,
  ContributeIcon,
  RefineWeekIcon,
  HackathonsIcon,
  AboutUsIcon,
  StoreIcon,
  MeetIcon,
  BlogIcon
} from '../icons/popover';

export type NavbarPopoverItemType = {
  isPopover: true;
  label: string;
  split?: boolean;
  items: {
    label: string;
    description: string;
    link?: string;
    href?: string;
    icon: React.FC;
  }[];
};

export type NavbarItemType = {
  isPopover?: false;
  label: string;
  icon?: React.FC;
  link?: string;
  href?: string;
};

export type MenuItemType = NavbarPopoverItemType | NavbarItemType;

export const MENU_ITEMS: MenuItemType[] = [
  {
    isPopover: true,
    label: '产品',
    items: [
      {
        label: 'Cloud Free Tier',
        description: 'Cloud Free Tier',
        // link: '/docs/support/faq',
        href: 'https://demo.1stblue.cloud/',
        icon: MeetIcon
      },
      {
        label: '典型场景',
        description: '典型场景',
        link: '/docs/support/promotion',
        icon: RefineWeekIcon
      },
      {
        label: 'Cloud Team / Enterprise',
        description: 'Cloud Team / Enterprise',
        // link: '/pricing',
        href: 'https://demo.1stblue.cloud/',
        icon: ExamplesIcon
      },
      {
        label: '成功故事',
        description: '成功故事',
        link: '/docs/support/promotion',
        icon: StoreIcon
      },
      {
        label: 'On Premise',
        description: 'On Premise',
        link: '/docs/support/download',
        icon: HackathonsIcon
      }
    ]
  },
  {
    label: '文档',
    isPopover: false,
    href: '/docs'
  },
  {
    label: '博客',
    isPopover: false,
    href: '/blog'
  },
  {
    isPopover: false,
    label: '连接器',
    href: '/connectors'
  }
  // {
  //   isPopover: false,
  //   label: '价格',
  //   href: '/pricing'
  // }
];

