import React from 'react';
import {
  User,
  Gamepad,
  Zap,
  Map,
  Trophy,
  Radio,
  Mail,
  Briefcase,
  Code,
  FileText,
  Message,
} from 'pixelarticons/react';

export type PixelIconName =
  | 'user'
  | 'gamepad'
  | 'rocket'
  | 'tech'
  | 'zap'
  | 'journey'
  | 'map'
  | 'trophy'
  | 'chat'
  | 'comms'
  | 'radio'
  | 'mail'
  | 'briefcase'
  | 'code'
  | 'file'
  | 'file-text'
  | (string & {});

export interface PixelIconProps extends React.SVGProps<SVGSVGElement> {
  name: PixelIconName | string;
  size?: number;
  className?: string;
}

export const PixelIcon: React.FC<PixelIconProps> = ({
  name,
  size = 18,
  className = '',
  ...props
}) => {
  const iconProps = {
    width: size,
    height: size,
    className: `pixel-sharp shrink-0 inline-block ${className}`,
    style: { minWidth: size, minHeight: size, ...props.style },
    ...props,
  };

  switch (name) {
    case 'user':
      return <User {...iconProps} />;
    case 'gamepad':
    case 'rocket':
      return <Gamepad {...iconProps} />;
    case 'tech':
    case 'zap':
      return <Zap {...iconProps} />;
    case 'journey':
    case 'map':
      return <Map {...iconProps} />;
    case 'trophy':
      return <Trophy {...iconProps} />;
    case 'chat':
    case 'comms':
    case 'radio':
      return <Radio {...iconProps} />;
    case 'mail':
      return <Mail {...iconProps} />;
    case 'briefcase':
      return <Briefcase {...iconProps} />;
    case 'code':
      return <Code {...iconProps} />;
    case 'file':
    case 'file-text':
      return <FileText {...iconProps} />;
    default:
      return <Message {...iconProps} />;
  }
};
