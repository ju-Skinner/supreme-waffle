import React, { PropsWithChildren } from 'react';

import { PdsReactProps } from './PdsReactProps';
import { PdsIconInner } from './inner-proxies';

import { createForwardRef } from './react-component-lib/utils';

interface PdsIconProps {
  color?: string;
  icon?: string;
  name?: string;
  size?: string;
}

type InternalProps = PropsWithChildren<
  PdsIconProps & {
    forwardedRef?: React.ForwardedRef<HTMLPdsIconElement>;
  }
>;

class PdsIconContainer extends React.PureComponent<InternalProps> {
  constructor(props: InternalProps) {
    super(props);
    if (this.props.name) {
      console.warn(
        'In Core React, you import icons from "@ju-skinner/ideal-icons/icons" and set the icon you imported to the "icon" property. Setting the "name" property has no effect.'
      );
    }
  }

  render() {
    const { icon, ...rest } = this.props;

    return (
      <PdsIconInner ref={this.props.forwardedRef} icon={icon} {...rest}>
        {this.props.children}
      </PdsIconInner>
    );
  }
}

export const PdsIcon = createForwardRef<PdsIconProps & PdsReactProps, HTMLPdsIconElement>(
  PdsIconContainer,
  'PdsIcon'
);
