import React from 'react';
import { Link as ReactRouterLink, useParams } from 'react-router-dom';
import { getConfigRouterLinkProps } from '../utils';

export const Link = props => {
    const routerParams = useParams();

    const { params, ...otherProps } = props;

    let nextProps = {
        ...otherProps,
        params: {
            ...routerParams,
            ...params
        }
    };

    nextProps = getConfigRouterLinkProps(nextProps);

    return <ReactRouterLink {...nextProps} />;
};
