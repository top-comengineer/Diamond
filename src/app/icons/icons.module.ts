import { NgModule } from "@angular/core";

import { FeatherModule } from "angular-feather";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  Award,
  Bell,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Code,
  Codesandbox,
  Copy,
  CreditCard,
  ExternalLink,
  Flag,
  FolderMinus,
  FolderPlus,
  Gift,
  Heart,
  Home,
  Image,
  Info,
  Key,
  Link,
  Link2,
  Mail,
  MessageSquare,
  Percent,
  RefreshCw,
  Repeat,
  RotateCw,
  Search,
  Send,
  Settings,
  ShoppingCart,
  Trash2,
  TrendingUp,
  User,
  UserPlus,
  UserX,
  X,
} from "angular-feather/icons";
import {
  BellNotification,
  Bitclout,
  BitcloutCircle,
  Card,
  Coin,
  Diamond,
  Frame,
  Gem,
  Lock,
  MultipleNfts,
  Quote,
  SingleNft,
} from "src/assets/img/feather";

const icons = {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  Award,
  Bell,
  BellNotification,
  Bitclout,
  BitcloutCircle,
  Card,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Code,
  Codesandbox,
  Coin,
  Copy,
  CreditCard,
  Diamond,
  ExternalLink,
  Flag,
  FolderMinus,
  FolderPlus,
  Frame,
  Gem,
  Gift,
  Heart,
  Home,
  Image,
  Info,
  Key,
  Link,
  Link2,
  Lock,
  Mail,
  MessageSquare,
  MultipleNfts,
  Percent,
  Quote,
  RefreshCw,
  Repeat,
  RotateCw,
  Search,
  Send,
  Settings,
  ShoppingCart,
  SingleNft,
  Trash2,
  TrendingUp,
  User,
  UserPlus,
  UserX,
  X,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
