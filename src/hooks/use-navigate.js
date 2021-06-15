import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { navigationRef, nameMapperRef } from '../root';
import { parsePath } from '../utils';

export const useNavigate = () => {
    const routerParams = useParams();
    /**
     *
     */
    const navigateBack = useCallback(() => {
        navigationRef?.current?.history?.goBack();
    }, []);

    /**
     *
     */
    const navigateTo = useCallback(
        (path, params) => {
            const nameMapper = nameMapperRef.current;
            const route = nameMapper.get(path) || {};
            const { fullPath } = route;
            const nextPath = parsePath(
                fullPath || path,
                { ...routerParams, ...params },
                true
            );
            if (!path) {
                throw new Error(
                    `@yuandana/config-router: You must specify a path to navigateTo function`
                );
            }
            if (nextPath) {
                navigationRef?.current?.history?.push(nextPath);
            }
        },
        []
    );

    /**
     *
     */
    const redirectTo = useCallback(
        (path, params) => {
            const nameMapper = nameMapperRef.current;
            const route = nameMapper.get(path) || {};
            const { fullPath } = route;
            const nextPath = parsePath(
                fullPath || path,
                { ...routerParams, ...params },
                true
            );
            if (!path) {
                throw new Error(
                    `@yuandana/config-router: You must specify a path to navigateTo function`
                );
            }
            if (nextPath) {
                navigationRef?.current?.history?.replace(nextPath);
            }
        },
        [routerParams]
    );

    return {
        navigateBack,
        navigateTo,
        redirectTo
    };
};
