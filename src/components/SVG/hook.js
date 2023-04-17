import React from 'react';
import {ICON_NAMES} from './icon_names';
import {
  HydraIcon,
  HydraText
} from "./Logo"
import {
  PhoneIcon,
  MessageIcon,
  GLocationIcon
} from './Communication';
import {
  ArrowRightIcon,
  ArrowRightLongIcon,
  MenuIcon,
  PrevIcon,
  NextIcon,
  ArrowDownIcon
} from './Assets'
import {
  Vector2Icon,
  Vector1Icon,
  Vector3Icon,
  Vector15Icon,
  Vector21Icon
} from './Vector'
import {
  PinterestIcon,
  FbIcon,
  YoutubeIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon
} from './Site'


export const ICONS = {
  [ICON_NAMES.LOGO.HYDRA_ICON]: ({width, height, color}) => (
    <HydraIcon width={width} height={height} color={color}/>
),
[ICON_NAMES.LOGO.HYDRA_TEXT]: ({width, height, color}) => (
    <HydraText width={width} height={height}  color={color}/>
),
[ICON_NAMES.COMMUNICATION.PHONE_ICON]: ({width, height, color}) => (
  <PhoneIcon width={width} height={height}  color={color}/>
),
[ICON_NAMES.COMMUNICATION.MESSAGE_ICON]: ({width, height, color}) => (
  <MessageIcon width={width} height={height}  color={color}/>
),
[ICON_NAMES.COMMUNICATION.GLOCATION_ICON]: ({width, height, color}) => (
  <GLocationIcon width={width} height={height}  color={color}/>
),
[ICON_NAMES.ASSETS.ARROW_RIGHT_ICON]: ({width, height, color}) => (
  <ArrowRightIcon width={width} height={height}  color={color}/>
),
[ICON_NAMES.ASSETS.MENU_ICON]: ({width, height, color}) => (
  <MenuIcon width={width} height={height}  color={color}/>
),
[ICON_NAMES.ASSETS.PREV_ICON]: ({width, height, color,mode}) => (
  <PrevIcon width={width} height={height}  color={color} mode={mode}/>
),
[ICON_NAMES.ASSETS.NEXT_ICON]: ({width, height, color,mode}) => (
  <NextIcon width={width} height={height}  color={color} mode={mode}/>
),
[ICON_NAMES.ASSETS.ARROW_RIGHT_LONG_ICON]: ({width, height, color}) => (
  <ArrowRightLongIcon width={width} height={height}  color={color}/>
),
[ICON_NAMES.ASSETS.ARROW_DOWN_ICON]: ({width, height, color}) => (
  <ArrowDownIcon width={width} height={height}  color={color}/>
),
[ICON_NAMES.VECTOR.VECTOR_2_ICON]: ({width, height, color}) => (
  <Vector2Icon width={width} height={height}  color={color}/>
),
[ICON_NAMES.VECTOR.VECTOR_1_ICON]: ({width, height, color}) => (
  <Vector1Icon width={width} height={height}  color={color}/>
),
[ICON_NAMES.VECTOR.VECTOR_3_ICON]: ({width, height, color}) => (
  <Vector3Icon width={width} height={height}  color={color}/>
),
[ICON_NAMES.VECTOR.VECTOR_15_ICON]: ({width, height, color}) => (
  <Vector15Icon width={width} height={height}  color={color}/>
),
[ICON_NAMES.VECTOR.VECTOR_21_ICON]: ({width, height, color}) => (
  <Vector21Icon width={width} height={height}  color={color}/>
),
[ICON_NAMES.SITE.FB_ICON]: ({width, height, color}) => (
  <FbIcon width={width} height={height}  color={color}/>
),
[ICON_NAMES.SITE.TWITTER_ICON]: ({width, height, color}) => (
  <TwitterIcon width={width} height={height}  color={color}/>
),
[ICON_NAMES.SITE.LINKEDIN_ICON]: ({width, height, color}) => (
  <LinkedinIcon width={width} height={height}  color={color}/>
),
[ICON_NAMES.SITE.INSTAGRAM_ICON]: ({width, height, color}) => (
  <InstagramIcon width={width} height={height}  color={color}/>
),
[ICON_NAMES.SITE.YOUTUBE_ICON]: ({width, height, color}) => (
  <YoutubeIcon width={width} height={height}  color={color}/>
),
[ICON_NAMES.SITE.PRINTEREST_ICON]: ({width, height, color}) => (
  <PinterestIcon width={width} height={height}  color={color}/>
),
};