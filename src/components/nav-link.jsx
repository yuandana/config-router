import React from 'react';
import { NavLink as ReactRouterNavLink, useParams } from 'react-router-dom';
import { getConfigRouterLinkProps } from '../utils';

export const NavLink = props => {
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

    return <ReactRouterNavLink {...nextProps} />;
};
