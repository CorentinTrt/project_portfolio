import React from 'react';

import {
    SiAndroid,
    SiCraftcms,
    SiFastify,
    SiGatsby,
    SiGooglecloud,
    SiGraphql,
    SiIos,
    SiMongodb,
    SiMysql,
    SiNestjs,
    SiNodedotjs,
    SiNx,
    SiPhp,
    SiReact,
    SiSvelte,
    SiThreedotjs,
    SiTrpc,
    SiTypescript,
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
        case 'craft':
            return <SiCraftcms {...iconProps} />;
        case 'fastify':
            return <SiFastify {...iconProps} />;
        case 'gatsby':
            return <SiGatsby {...iconProps} />;
        case 'google cloud':
            return <SiGooglecloud {...iconProps} />;
        case 'graphql':
            return <SiGraphql {...iconProps} />;
        case 'grpc':
            return <SiTrpc {...iconProps} />;
        case 'ios':
            return <SiIos {...iconProps} />;
        case 'mongodb':
            return <SiMongodb {...iconProps} />;
        case 'mysql':
            return <SiMysql {...iconProps} />;
        case 'nestjs':
            return <SiNestjs {...iconProps} />;
        case 'node.js':
            return <SiNodedotjs {...iconProps} />;
        case 'php':
            return <SiPhp {...iconProps} />;
        case 'nx':
            return <SiNx {...iconProps} />;
        case 'react':
            return <SiReact {...iconProps} />;
        case 'svelte':
            return <SiSvelte {...iconProps} />;
        case 'three.js':
            return <SiThreedotjs {...iconProps} />;
        case 'typescript':
            return <SiTypescript {...iconProps} />;
        default:
            return <></>;
    }
};

export default Icon;
