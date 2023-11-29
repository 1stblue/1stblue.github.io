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
  items: {
    label: string;
    description: string;
    link: string;
    icon: React.FC;
  }[];
};

export type NavbarItemType = {
  isPopover?: false;
  label: string;
  icon?: React.FC;
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
        link: '/docs/faq',
        icon: MeetIcon
      },
      {
        label: '典型场景',
        description: '典型场景',
        link: '/examples',
        icon: RefineWeekIcon
      },
      {
        label: 'Cloud Team / Enterprise',
        description: 'Cloud Team / Enterprise',
        link: '/pricing',
        icon: ExamplesIcon
      },
      {
        label: '成功故事',
        description: '成功故事',
        link: '/about',
        icon: StoreIcon
      },
      {
        label: 'On Premise',
        description: 'On Premise',
        link: '/pricing',
        icon: HackathonsIcon
      },
    ]
  },
  {
    isPopover: true,
    label: '资源',
    items: [
      {
        label: '快速开始',
        description: 'Create your first Bluepipe connection.',
        link: 'docs/getting-started',
        icon: TutorialIcon
      },
      {
        label: '博客',
        description: 'Articles about Bluepipe development.',
        link: '/blog',
        icon: BlogIcon
      }, {
        label: '文档',
        description: 'Everything you need to get started.',
        link: '/docs/tutorial',
        icon: DocumentsIcon
      },
      {
        label: '下载',
        description: '',
        link: '/docs/support/download/',
        icon: ConnectorsIcon
      },
    ]
  },
  {
    isPopover: false,
    label: "连接器",
    href: "/connectors",
  },
  {
    isPopover: false,
    label: '价格',
    href: '/pricing'
  }
];

