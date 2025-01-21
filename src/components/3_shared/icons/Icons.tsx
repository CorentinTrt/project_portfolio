import React from 'react';

import {
  SiAndroid,
  // Craftcms,
  // Gatsby,
  // GoogleCloud,
  // Graphql,
  // Ios,
  // Mongodb,
  // Mysql,
  // Nodedotjs,
  // Nx,
  // ReactJs,
  // Threedotjs,
  // Typescript,
} from '@icons-pack/react-simple-icons';

type Props = {
  label: string;
};

const Icon = (props: Props) => {
  const { label } = props;

  const iconProps = {
    width: '3rem',
    height: '3rem',
    color: '#0A0A0A',
  };

  switch (label) {
    case 'android':
      return <SiAndroid {...iconProps} />;
   // case 'craft':
   //   return <Craftcms {...iconProps} />;
   // case 'gatsby':
   //   return <Gatsby {...iconProps} />;
   // case 'google clous':
   //   return <Gatsby {...iconProps} />;
   // case 'graphql':
   //   return <Graphql {...iconProps} />;
   // case 'ios':
   //   return <Ios {...iconProps} />;
   // case 'mongodb':
   //   return <Mongodb {...iconProps} />;
   // case 'mysql':
   //   return <Mysql {...iconProps} />;
   // case 'node.js':
   //   return <Nodedotjs {...iconProps} />;
   // case 'nx':
   //   return <Nx {...iconProps} />;
   // case 'react':
   //   return <ReactJs {...iconProps} />;
   // case 'three.js':
   //   return <Threedotjs {...iconProps} />;
   // case 'typescript':
   //   return <Typescript {...iconProps} />;
    default:
      return <></>;
  }
};

export default Icon;
