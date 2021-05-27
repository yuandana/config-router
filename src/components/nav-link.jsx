import { NavLink as ReactRouterNavLink, useParams } from 'react-router-dom';
import { getConfigRouterLinkProps } from '../utils';

export const NavLink = props => {
    const locationParams = useParams();

    const { params, ...otherProps } = props;
    let nextProps = {
        ...otherProps,
        params: {
            ...locationParams,
            ...params
        }
    };

    nextProps = getConfigRouterLinkProps(nextProps);

    return <ReactRouterNavLink {...nextProps} />;
};