import  * as Icons from '@ant-design/icons';
import React from 'react';

function IconComponent(props) {
  const dynamicIcon = React.createElement(
    Icons[props.iconType],
    {
      style:{
        fontSize: props.iconSize,
        paddingRight: '12px'
      }
    }
  );
  return (
    <span>{dynamicIcon}</span>
  );
}

export default IconComponent;
